import { createContext, useContext, useState, useEffect } from 'react';
import { connect, disconnect, isConnected as checkConnection } from '@stacks/connect';

const WalletContext = createContext();

export function WalletProvider({ children }) {
  const [isConnected, setIsConnected] = useState(false);
  const [walletInfo, setWalletInfo] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [showRoleModal, setShowRoleModal] = useState(false);

  useEffect(() => {
    // Check if wallet is already connected
    const connected = checkConnection();
    if (connected) {
      setIsConnected(true);
      // Try to get wallet info from session
      const savedWalletInfo = sessionStorage.getItem('stxworx_wallet_info');
      if (savedWalletInfo) {
        setWalletInfo(JSON.parse(savedWalletInfo));
      }
    }

    // Check if user already has a role saved
    const savedRole = localStorage.getItem('stxworx_user_role');
    if (savedRole) {
      setUserRole(savedRole);
    }
  }, []);

  const connectWallet = async () => {
    try {
      const connectionResponse = await connect();
      setWalletInfo(connectionResponse);
      setIsConnected(true);
      
      // Save wallet info to session storage
      sessionStorage.setItem('stxworx_wallet_info', JSON.stringify(connectionResponse));
      
      // Always show role modal when connecting (for testing/switching roles)
      setShowRoleModal(true);
    } catch (error) {
      // Silently handle user cancellation
      if (error.message?.includes('User canceled')) {
        return;
      }
      console.error('Wallet connection failed:', error);
    }
  };

  const disconnectWallet = () => {
    disconnect();
    setWalletInfo(null);
    setIsConnected(false);
    // Clear role and wallet info on disconnect
    setUserRole(null);
    localStorage.removeItem('stxworx_user_role');
    sessionStorage.removeItem('stxworx_wallet_info');
  };

  const selectRole = (role) => {
    setUserRole(role);
    localStorage.setItem('stxworx_user_role', role);
    setShowRoleModal(false);
    
    // Redirect to home after role selection
    window.location.href = '/home';
  };

  const getAddress = () => {
    if (!walletInfo) return null;
    return walletInfo.addresses[2].address;
  };

  const truncateAddress = (address) => {
    if (!address) return '';
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <WalletContext.Provider
      value={{
        walletInfo,
        isConnected,
        userRole,
        showRoleModal,
        connectWallet,
        disconnectWallet,
        selectRole,
        getAddress,
        truncateAddress,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('useWallet must be used within WalletProvider');
  }
  return context;
};
