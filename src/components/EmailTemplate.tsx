import React from 'react';
import './EmailTemplate.css';

interface EmailTemplateProps {
  iteration: 'iteration1' | 'iteration2' | 'iteration3';
}

const EmailTemplate: React.FC<EmailTemplateProps> = ({ iteration }) => {
  const handleDownloadClick = () => {
    window.open('smartcat-project-mockup.html?source=email&highlight=download', '_blank');
  };

  return (
    <div className="email-template">
      <div className="email-card">
        <div className="email-header">
          <div className="header-content">
            <div className="logo-section">
              <div className="logo-icon">SC</div>
              <div className="logo-text">
                <div className="brand-name">Smartcat</div>
                <div className="brand-tagline">AI Translation Platform</div>
              </div>
            </div>
            <div className="status-section">
              <div className="status-label">Project Status</div>
              <div className="status-complete">
                <span className="checkmark">✓</span>
                <span>Complete</span>
              </div>
            </div>
          </div>
          <div className="main-message">Translation Complete!</div>
        </div>

        <div className="email-body">
          {iteration === 'iteration3' && (
            <div className="timeline-section">
              <div className="timeline">
                <div className="timeline-station completed">
                  <div className="station-circle"></div>
                  <div className="station-label">Project Start</div>
                </div>
                <div className="timeline-station completed">
                  <div className="station-circle"></div>
                  <div className="station-label">File Upload</div>
                </div>
                <div className="timeline-station completed">
                  <div className="station-circle"></div>
                  <div className="station-label">AI Translation</div>
                </div>
                <div className="timeline-station completed">
                  <div className="station-circle"></div>
                  <div className="station-label">Human Review</div>
                </div>
                <div className="timeline-station completed">
                  <div className="station-circle complete"></div>
                  <div className="station-label">Complete</div>
                </div>
              </div>
            </div>
          )}

          <div className="greeting">Hi [First Name],</div>
          <div className="message">
            Your translation project <strong>[Project Name]</strong> has been completed and is ready for download. Exciting times! 🎉
          </div>

          <div className="cta-section">
            <a href="#" onClick={handleDownloadClick} className="cta-button">
              Download Files
            </a>
            <div className="cta-subtext">Access your project in Smartcat</div>
          </div>

          {iteration === 'iteration2' && (
            <div className="iteration-2-content">
              <div className="time-distribution">
                <h3>Time Distribution</h3>
                <div className="distribution-bar">
                  <div className="ai-distribution" style={{ width: '2%' }}>
                    <span className="distribution-label">AI: 27s</span>
                  </div>
                  <div className="distribution-gap" style={{ width: '1%' }}></div>
                  <div className="human-distribution" style={{ width: '97%' }}>
                    <span className="distribution-label">Human: 4.5h</span>
                  </div>
                </div>
                <div className="distribution-legend">
                  <div className="legend-item">
                    <span className="legend-color ai"></span>
                    <span>AI Translation: 27 seconds</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-color human"></span>
                    <span>Human Review: 4.5 hours</span>
                  </div>
                </div>
              </div>

              <div className="insight-section">
                <p>
                  You can reduce human review time and deliver even faster results by finetuning your{' '}
                  <a href="#" className="insight-link">project's AI translation preferences</a>
                </p>
              </div>

              <div className="metrics-grid">
                <div className="metric-card">
                  <div className="metric-header">
                    <span className="metric-arrow">↗</span>
                    <span className="metric-change">+15% vs avg</span>
                  </div>
                  <div className="metric-value">3,247</div>
                  <div className="metric-label">words</div>
                </div>
                <div className="metric-card">
                  <div className="metric-header">
                    <span className="metric-arrow">↗</span>
                    <span className="metric-change">+87%</span>
                  </div>
                  <div className="metric-value">Time Saved</div>
                  <div className="metric-label">vs. manual translation</div>
                </div>
                <div className="metric-card">
                  <div className="metric-header">
                    <span className="metric-arrow">↗</span>
                    <span className="metric-change">+94.2%</span>
                  </div>
                  <div className="metric-value">Quality Score</div>
                  <div className="metric-label">AI accuracy</div>
                </div>
                <div className="metric-card">
                  <div className="metric-header">
                    <span className="metric-arrow">↗</span>
                    <span className="metric-change">+$1,247</span>
                  </div>
                  <div className="metric-value">Cost Savings</div>
                  <div className="metric-label">Estimated savings</div>
                </div>
              </div>

              <div className="performance-breakdown">
                <h3>Project Timeline</h3>
                <div className="breakdown-table">
                  <div className="breakdown-row">
                    <span className="breakdown-stage">Project Setup</span>
                    <span className="breakdown-duration">2 minutes</span>
                  </div>
                  <div className="breakdown-row">
                    <span className="breakdown-stage">AI Translation</span>
                    <span className="breakdown-duration">27 seconds</span>
                  </div>
                  <div className="breakdown-row">
                    <span className="breakdown-stage">Awaiting Human Review</span>
                    <span className="breakdown-duration">30 minutes</span>
                  </div>
                  <div className="breakdown-row">
                    <span className="breakdown-stage">Human Review Duration</span>
                    <span className="breakdown-duration">4.5 hours</span>
                  </div>
                  <div className="breakdown-row total">
                    <span className="breakdown-stage">Total Time</span>
                    <span className="breakdown-duration">5.2 hours</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {iteration === 'iteration3' && (
            <div className="iteration-3-content">
              <div className="time-distribution">
                <div className="distribution-bar">
                  <div className="ai-distribution" style={{ width: '2%' }}></div>
                  <div className="distribution-gap" style={{ width: '1%' }}></div>
                  <div className="human-distribution" style={{ width: '97%' }}></div>
                </div>
                <div className="distribution-legend">
                  <div className="legend-item">
                    <span className="legend-color ai"></span>
                    <span>AI Translation: 27 seconds</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-color human"></span>
                    <span>Human Review: 4.5 hours</span>
                  </div>
                </div>
              </div>

              <div className="insight-section">
                <p>
                  You can reduce human review time and deliver even faster results by finetuning your{' '}
                  <a href="#" className="insight-link">project's AI translation preferences</a>
                </p>
              </div>

              <div className="metrics-grid">
                <div className="metric-card">
                  <div className="metric-header">
                    <span className="metric-arrow">↗</span>
                    <span className="metric-change">+15% vs avg</span>
                  </div>
                  <div className="metric-value">3,247</div>
                  <div className="metric-label">words</div>
                </div>
                <div className="metric-card">
                  <div className="metric-header">
                    <span className="metric-arrow">↗</span>
                    <span className="metric-change">+87%</span>
                  </div>
                  <div className="metric-value">Time Saved</div>
                  <div className="metric-label">vs. manual translation</div>
                </div>
                <div className="metric-card">
                  <div className="metric-header">
                    <span className="metric-arrow">↗</span>
                    <span className="metric-change">+94.2%</span>
                  </div>
                  <div className="metric-value">Quality Score</div>
                  <div className="metric-label">AI accuracy</div>
                </div>
                <div className="metric-card">
                  <div className="metric-header">
                    <span className="metric-arrow">↗</span>
                    <span className="metric-change">+$1,247</span>
                  </div>
                  <div className="metric-value">Cost Savings</div>
                  <div className="metric-label">Estimated savings</div>
                </div>
              </div>

              <div className="performance-breakdown">
                <h3>Project Timeline</h3>
                <div className="breakdown-table">
                  <div className="breakdown-row">
                    <span className="breakdown-stage">Project Setup</span>
                    <span className="breakdown-duration">2 minutes</span>
                  </div>
                  <div className="breakdown-row">
                    <span className="breakdown-stage">AI Translation</span>
                    <span className="breakdown-duration">27 seconds</span>
                  </div>
                  <div className="breakdown-row">
                    <span className="breakdown-stage">Awaiting Human Review</span>
                    <span className="breakdown-duration">30 minutes</span>
                  </div>
                  <div className="breakdown-row">
                    <span className="breakdown-stage">Human Review Duration</span>
                    <span className="breakdown-duration">4.5 hours</span>
                  </div>
                  <div className="breakdown-row total">
                    <span className="breakdown-stage">Total Time</span>
                    <span className="breakdown-duration">5.2 hours</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="email-footer">
            <div className="footer-text">Thank you for using Smartcat!</div>
            <div className="footer-signature">Best regards,<br />The Smartcat Team</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailTemplate;
