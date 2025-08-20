import React from 'react';
import './EmailTemplate.css';

interface EmailTemplateProps {
  iteration: 'iteration1' | 'iteration2.1' | 'iteration2.2';
}

const EmailTemplate: React.FC<EmailTemplateProps> = ({ iteration }) => {
  const handleDownloadClick = () => {
    window.open('smartcat-project-mockup.html?source=email&highlight=download', '_blank');
  };

  return (
    <div className="email-template">
      <div className="email-card">
        {/* Header with Smartcat branding */}
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
          <div className="main-message">Your translation is ready!</div>
          <div className="project-name">Marketing Campaign - One-pager about LQA.pdf</div>
        </div>

        {/* Email Body */}
        <div className="email-body">
          <div className="greeting">Hi [First Name],</div>
          <div className="message">
            Great news! Your translation project <strong>'Marketing Campaign - One-pager about LQA.pdf'</strong> has been completed and is ready for download.
          </div>

          {/* Translation Complete Confirmation */}
          <div className="completion-box">
            <span className="completion-checkmark">✓</span>
            <span className="completion-text">Translation Complete</span>
            <div className="completion-subtext">All files have been translated, reviewed, and quality-checked</div>
          </div>

          {/* CTA Button */}
          <div className="cta-section">
            <a href="#" onClick={handleDownloadClick} className="cta-button">
              Download Your Files
            </a>
            <div className="cta-subtext">Access your project in Smartcat platform</div>
          </div>

          {/* Iteration-specific content */}
          {iteration === 'iteration2.1' && (
            <div className="iteration-2-1-content">
              {/* Metrics Grid */}
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

              {/* Performance Breakdown */}
              <div className="performance-breakdown">
                <h3>Performance Breakdown</h3>
                <div className="breakdown-items">
                  <div className="breakdown-item">
                    <span className="breakdown-label">AI Translation:</span>
                    <span className="breakdown-value">27 seconds</span>
                  </div>
                  <div className="breakdown-item">
                    <span className="breakdown-label">Human Review:</span>
                    <span className="breakdown-value">4.5 hours</span>
                  </div>
                  <div className="breakdown-item">
                    <span className="breakdown-label">Total Time:</span>
                    <span className="breakdown-value">4.5 hours</span>
                  </div>
                </div>
              </div>

              {/* AI Efficiency Bar */}
              <div className="efficiency-bar">
                <div className="efficiency-labels">
                  <span>AI Translation (85%)</span>
                  <span>Human Review (15%)</span>
                </div>
                <div className="efficiency-visual">
                  <div className="ai-segment" style={{ width: '85%' }}></div>
                  <div className="human-segment" style={{ width: '15%' }}></div>
                </div>
              </div>

              {/* ROI & Benefits */}
              <div className="roi-section">
                <h3>ROI & Benefits</h3>
                <ul className="benefits-list">
                  <li>⚡ 12x faster than traditional translation</li>
                  <li>💰 60% cost reduction</li>
                  <li>🎯 94.2% accuracy maintained</li>
                  <li>🔄 Consistent terminology across all content</li>
                </ul>
              </div>
            </div>
          )}

          {iteration === 'iteration2.2' && (
            <div className="iteration-2-2-content">
              {/* Include all content from 2.1 */}
              <div className="iteration-2-1-content">
                {/* Metrics Grid */}
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

                {/* Performance Breakdown */}
                <div className="performance-breakdown">
                  <h3>Performance Breakdown</h3>
                  <div className="breakdown-items">
                    <div className="breakdown-item">
                      <span className="breakdown-label">AI Translation:</span>
                      <span className="breakdown-value">27 seconds</span>
                    </div>
                    <div className="breakdown-item">
                      <span className="breakdown-label">Human Review:</span>
                      <span className="breakdown-value">4.5 hours</span>
                    </div>
                    <div className="breakdown-item">
                      <span className="breakdown-label">Total Time:</span>
                      <span className="breakdown-value">4.5 hours</span>
                    </div>
                  </div>
                </div>

                {/* AI Efficiency Bar */}
                <div className="efficiency-bar">
                  <div className="efficiency-labels">
                    <span>AI Translation (85%)</span>
                    <span>Human Review (15%)</span>
                  </div>
                  <div className="efficiency-visual">
                    <div className="ai-segment" style={{ width: '85%' }}></div>
                    <div className="human-segment" style={{ width: '15%' }}></div>
                  </div>
                </div>

                {/* ROI & Benefits */}
                <div className="roi-section">
                  <h3>ROI & Benefits</h3>
                  <ul className="benefits-list">
                    <li>⚡ 12x faster than traditional translation</li>
                    <li>💰 60% cost reduction</li>
                    <li>🎯 94.2% accuracy maintained</li>
                    <li>🔄 Consistent terminology across all content</li>
                  </ul>
                </div>
              </div>

              {/* Project Timeline */}
              <div className="timeline-section">
                <h3>Project Timeline</h3>
                <div className="timeline">
                  <div className="timeline-station completed">
                    <div className="station-circle"></div>
                    <div className="station-label">Project Start</div>
                  </div>
                  <div className="timeline-arrow"></div>
                  <div className="timeline-station completed">
                    <div className="station-circle"></div>
                    <div className="station-label">File Upload</div>
                  </div>
                  <div className="timeline-arrow"></div>
                  <div className="timeline-station completed">
                    <div className="station-circle"></div>
                    <div className="station-label">AI Translation</div>
                  </div>
                  <div className="timeline-arrow"></div>
                  <div className="timeline-station completed">
                    <div className="station-circle"></div>
                    <div className="station-label">Human Review</div>
                  </div>
                  <div className="timeline-arrow"></div>
                  <div className="timeline-station completed">
                    <div className="station-circle complete"></div>
                    <div className="station-label">Complete</div>
                  </div>
                </div>
              </div>

              {/* Time Distribution Bar */}
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

              {/* Insight Section */}
              <div className="insight-section">
                <p>
                  You can reduce human review time and deliver even faster results by finetuning your{' '}
                  <a href="#" className="insight-link">project's AI translation preferences</a>
                </p>
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="email-footer">
            <div className="footer-text">Thank you for using Smartcat!</div>
            <div className="footer-signature">Best regards,<br />The Smartcat Team</div>
          </div>
        </div>
      </div>

      {/* Project Performance Dashboard */}
      {iteration === 'iteration1' && (
        <div className="performance-dashboard">
          <h2>Project Performance Dashboard</h2>
          <div className="dashboard-cards">
            <div className="dashboard-card">
              <div className="card-header">
                <span className="card-arrow">↗</span>
                <span className="card-change">+15% vs avg</span>
              </div>
              <div className="card-value">4,500,500</div>
            </div>
            <div className="dashboard-card">
              <div className="card-header">
                <span className="card-arrow">↗</span>
                <span className="card-change">+10% faster</span>
              </div>
              <div className="card-value">14</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmailTemplate;
