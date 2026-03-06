import { useState } from 'react';

export default function ApplyModal({ isOpen, job, jobTitle, onClose, onSubmit }) {
  const [proposal, setProposal] = useState({
    coverLetter: '',
    bidAmount: '',
    timeline: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(proposal);
  };

  return (
    <>
      <style>{`
        .apply-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
          animation: fadeIn 0.3s ease;
        }

        .apply-modal-content {
          max-width: 600px;
          width: 90%;
          max-height: 90vh;
          overflow-y: auto;
          animation: slideUp 0.4s ease;
        }

        .apply-modal-card {
          background: rgba(14, 18, 24, 0.95);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 30px;
        }

        .apply-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: start;
          margin-bottom: 25px;
        }

        .apply-modal-title {
          font-size: 24px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 5px;
        }

        .apply-modal-job-title {
          font-size: 14px;
          color: #8E95A9;
        }

        .apply-modal-close {
          background: none;
          border: none;
          color: #8E95A9;
          font-size: 24px;
          cursor: pointer;
          padding: 0;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          transition: all 0.2s;
        }

        .apply-modal-close:hover {
          background: rgba(255, 255, 255, 0.05);
          color: #fff;
        }

        .apply-form-group {
          margin-bottom: 20px;
        }

        .apply-form-label {
          display: block;
          font-size: 14px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 8px;
        }

        .apply-form-input,
        .apply-form-textarea {
          width: 100%;
          padding: 12px 14px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          color: #fff;
          font-size: 14px;
          transition: all 0.3s ease;
        }

        .apply-form-input:focus,
        .apply-form-textarea:focus {
          outline: none;
          border-color: #c77bc9;
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 0 0 3px rgba(199, 123, 201, 0.1);
        }

        .apply-form-textarea {
          min-height: 120px;
          resize: vertical;
        }

        .apply-form-hint {
          font-size: 12px;
          color: #8E95A9;
          margin-top: 5px;
        }

        .apply-form-actions {
          display: flex;
          gap: 12px;
          margin-top: 25px;
        }

        .apply-btn {
          flex: 1;
          padding: 12px 20px;
          border: none;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .apply-btn-primary {
          background: #c77bc9;
          color: #fff;
        }

        .apply-btn-primary:hover {
          background: #b56ab8;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(199, 123, 201, 0.4);
        }

        .apply-btn-secondary {
          background: rgba(255, 255, 255, 0.05);
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .apply-btn-secondary:hover {
          background: rgba(255, 255, 255, 0.08);
        }
      `}</style>

      <div className="apply-modal-overlay" onClick={onClose}>
        <div className="apply-modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="apply-modal-card">
            <div className="apply-modal-header">
              <div>
                <h2 className="apply-modal-title">Submit Proposal</h2>
                <p className="apply-modal-job-title">{job?.title || jobTitle}</p>
              </div>
              <button className="apply-modal-close" onClick={onClose}>×</button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="apply-form-group">
                <label className="apply-form-label">Cover Letter</label>
                <textarea
                  className="apply-form-textarea"
                  placeholder="Explain why you're the best fit for this project..."
                  value={proposal.coverLetter}
                  onChange={(e) => setProposal({...proposal, coverLetter: e.target.value})}
                  required
                />
                <p className="apply-form-hint">Highlight your relevant experience</p>
              </div>

              <div className="apply-form-group">
                <label className="apply-form-label">Your Bid (STX)</label>
                <input
                  type="number"
                  className="apply-form-input"
                  placeholder={job?.budget ? `Budget: ${job.budget} STX` : 'Enter your bid amount'}
                  value={proposal.bidAmount}
                  onChange={(e) => setProposal({...proposal, bidAmount: e.target.value})}
                  required
                />
                <p className="apply-form-hint">Enter your proposed amount</p>
              </div>

              <div className="apply-form-group">
                <label className="apply-form-label">Estimated Timeline</label>
                <input
                  type="text"
                  className="apply-form-input"
                  placeholder="e.g. 2 weeks"
                  value={proposal.timeline}
                  onChange={(e) => setProposal({...proposal, timeline: e.target.value})}
                  required
                />
                <p className="apply-form-hint">How long will it take to complete?</p>
              </div>

              <div className="apply-form-actions">
                <button type="button" className="apply-btn apply-btn-secondary" onClick={onClose}>
                  Cancel
                </button>
                <button type="submit" className="apply-btn apply-btn-primary">
                  Submit Proposal
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
