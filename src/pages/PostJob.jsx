import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useWallet } from '../context/WalletContext';

export default function PostJob() {
  const navigate = useNavigate();
  const { userRole } = useWallet();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    skills: [],
    budget: '',
    deadline: '',
    milestones: 3
  });

  // Redirect if not a client
  if (userRole !== 'client') {
    navigate('/home');
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Save to backend
    alert('Job posted successfully! (Mock - will integrate with backend)');
    navigate('/jobs');
  };

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <style>{`
        .post-job-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 40px 20px;
        }

        .post-job-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .post-job-title {
          font-size: 36px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 10px;
        }

        .post-job-subtitle {
          font-size: 16px;
          color: #8E95A9;
        }

        .post-job-progress {
          display: flex;
          gap: 10px;
          margin-bottom: 40px;
          justify-content: center;
        }

        .progress-step {
          width: 40px;
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .progress-step.active {
          background: #6d9985;
          box-shadow: 0 0 10px rgba(109, 153, 133, 0.5);
        }

        .post-job-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 40px;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .post-job-card:hover {
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        }

        .form-group {
          margin-bottom: 30px;
        }

        .form-label {
          display: block;
          font-size: 14px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 10px;
        }

        .form-input,
        .form-textarea,
        .form-select {
          width: 100%;
          padding: 14px 16px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          color: #fff;
          font-size: 15px;
          transition: all 0.3s ease;
        }

        .form-input:focus,
        .form-textarea:focus,
        .form-select:focus {
          outline: none;
          border-color: #6d9985;
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 0 0 3px rgba(109, 153, 133, 0.1);
        }

        .form-textarea {
          min-height: 120px;
          resize: vertical;
        }

        .form-hint {
          font-size: 13px;
          color: #8E95A9;
          margin-top: 6px;
        }

        .milestone-selector {
          display: flex;
          gap: 15px;
          margin-top: 10px;
        }

        .milestone-option {
          flex: 1;
          padding: 16px;
          background: rgba(255, 255, 255, 0.03);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .milestone-option:hover {
          border-color: rgba(109, 153, 133, 0.5);
          transform: translateY(-2px);
        }

        .milestone-option.active {
          border-color: #6d9985;
          background: rgba(109, 153, 133, 0.1);
        }

        .milestone-number {
          font-size: 24px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 4px;
        }

        .milestone-label {
          font-size: 12px;
          color: #8E95A9;
        }

        .form-actions {
          display: flex;
          gap: 15px;
          margin-top: 40px;
        }

        .btn {
          flex: 1;
          padding: 14px 24px;
          border: none;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-primary {
          background: #6d9985;
          color: #fff;
        }

        .btn-primary:hover {
          background: #5a8070;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(109, 153, 133, 0.4);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.05);
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.08);
        }

        .skills-input-container {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          padding: 10px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          min-height: 50px;
        }

        .skill-tag {
          padding: 6px 12px;
          background: rgba(109, 153, 133, 0.2);
          border: 1px solid rgba(109, 153, 133, 0.3);
          border-radius: 6px;
          color: #6d9985;
          font-size: 13px;
          display: flex;
          align-items: center;
          gap: 6px;
          animation: slideIn 0.2s ease;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .skill-remove {
          cursor: pointer;
          font-weight: 700;
          opacity: 0.7;
          transition: opacity 0.2s;
        }

        .skill-remove:hover {
          opacity: 1;
        }

        .skill-input {
          flex: 1;
          min-width: 150px;
          background: transparent;
          border: none;
          color: #fff;
          font-size: 14px;
          outline: none;
        }
      `}</style>

      <div className="post-job-container">
        <div className="post-job-header">
          <h1 className="post-job-title">Post a <span style={{ color: '#6d9985' }}>New Job</span></h1>
          <p className="post-job-subtitle">Find the perfect freelancer for your project</p>
        </div>

        <div className="post-job-progress">
          <div className={`progress-step ${step >= 1 ? 'active' : ''}`}></div>
          <div className={`progress-step ${step >= 2 ? 'active' : ''}`}></div>
          <div className={`progress-step ${step >= 3 ? 'active' : ''}`}></div>
        </div>

        <div className="post-job-card">
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <>
                <div className="form-group">
                  <label className="form-label">Job Title</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. Build a DeFi Dashboard on Stacks"
                    value={formData.title}
                    onChange={(e) => updateField('title', e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-textarea"
                    placeholder="Describe your project, requirements, and deliverables..."
                    value={formData.description}
                    onChange={(e) => updateField('description', e.target.value)}
                    required
                  />
                  <p className="form-hint">Be specific about what you need</p>
                </div>

                <div className="form-actions">
                  <button type="button" className="btn btn-secondary" onClick={() => navigate('/home')}>
                    Cancel
                  </button>
                  <button type="button" className="btn btn-primary" onClick={() => setStep(2)}>
                    Continue
                  </button>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <div className="form-group">
                  <label className="form-label">Required Skills</label>
                  <div className="skills-input-container">
                    {formData.skills.map((skill, idx) => (
                      <span key={idx} className="skill-tag">
                        {skill}
                        <span className="skill-remove" onClick={() => {
                          updateField('skills', formData.skills.filter((_, i) => i !== idx));
                        }}>×</span>
                      </span>
                    ))}
                    <input
                      type="text"
                      className="skill-input"
                      placeholder="Type skill and press Enter..."
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          const skill = e.target.value.trim();
                          if (skill && !formData.skills.includes(skill)) {
                            updateField('skills', [...formData.skills, skill]);
                            e.target.value = '';
                          }
                        }
                      }}
                    />
                  </div>
                  <p className="form-hint">Press Enter to add each skill</p>
                </div>

                <div className="form-group">
                  <label className="form-label">Project Deadline</label>
                  <input
                    type="date"
                    className="form-input"
                    value={formData.deadline}
                    onChange={(e) => updateField('deadline', e.target.value)}
                    required
                  />
                </div>

                <div className="form-actions">
                  <button type="button" className="btn btn-secondary" onClick={() => setStep(1)}>
                    Back
                  </button>
                  <button type="button" className="btn btn-primary" onClick={() => setStep(3)}>
                    Continue
                  </button>
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <div className="form-group">
                  <label className="form-label">Total Budget (STX)</label>
                  <input
                    type="number"
                    className="form-input"
                    placeholder="e.g. 5000"
                    value={formData.budget}
                    onChange={(e) => updateField('budget', e.target.value)}
                    required
                  />
                  <p className="form-hint">Budget will be locked in escrow when you accept a proposal</p>
                </div>

                <div className="form-group">
                  <label className="form-label">Number of Milestones</label>
                  <div className="milestone-selector">
                    {[2, 3, 4].map(num => (
                      <div
                        key={num}
                        className={`milestone-option ${formData.milestones === num ? 'active' : ''}`}
                        onClick={() => updateField('milestones', num)}
                      >
                        <div className="milestone-number">{num}</div>
                        <div className="milestone-label">milestones</div>
                      </div>
                    ))}
                  </div>
                  <p className="form-hint">Budget will be split equally across milestones</p>
                </div>

                <div className="form-actions">
                  <button type="button" className="btn btn-secondary" onClick={() => setStep(2)}>
                    Back
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Post Job
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
