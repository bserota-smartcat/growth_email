import React from 'react';
import './EmailTemplate.css';

interface EmailTemplateProps {
  iteration: 'iteration1' | 'iteration2' | 'iteration3';
}

// Component for displaying email templates with different iterations
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
          <div className="main-message">Translation Complete!</div>
        </div>

        {/* Email Body */}
        <div className="email-body">
          {/* Timeline section for iteration3 - moved above greeting */}
          {iteration === 'iteration3' && (
            <div className="timeline-section">
              <div className="timeline">
                <div className="timeline-station completed">
                  <div className="station-circle"></div>
                  <div className="station-label">Project Start</div>
                  <div className="station-time">0 min</div>
                </div>
                <div className="timeline-station completed">
                  <div className="station-circle"></div>
                  <div className="station-label">File Upload</div>
                  <div className="station-time">2 min</div>
                </div>
                <div className="timeline-station completed ai-powered">
                  <div className="station-circle ai">⚡</div>
                  <div className="station-label">AI Translation</div>
                  <div className="station-time">27 sec</div>
                </div>
                <div className="timeline-station completed">
                  <div className="station-circle"></div>
                  <div className="station-label">Human Review</div>
                  <div className="station-time">4.5 hrs</div>
                </div>
                <div className="timeline-station completed">
                  <div className="station-circle complete"></div>
                  <div className="station-label">Complete</div>
                  <div className="station-time">5.2 hrs total</div>
                </div>
              </div>
            </div>
          )}

          <div className="greeting">Hi [First Name],</div>
          <div className="message">
            Your translation project <strong>[Project Name]</strong> has been completed and is ready for download. Exciting times! 🎉
          </div>

          {/* CTA Button */}
          <div className="cta-section">
            <a href="#" onClick={handleDownloadClick} className="cta-button">
              Download Files
            </a>
            <div className="cta-subtext">Access your project in Smartcat</div>
          </div>

          {/* Iteration 2 specific content */}
          {iteration === 'iteration2' && (
            <div className="iteration-2-content">
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

              {/* Insight Section - Moved up for better visibility */}
              <div className="insight-section">
                <p>
                  <strong>💡 Pro tip:</strong> You can reduce human review time by up to 70% and deliver even faster results by optimizing your{' '}
                  <a href="#" className="insight-link">AI translation preferences</a>
                </p>
                <button className="optimize-cta">Optimize AI Settings →</button>
              </div>

              {/* Metrics Grid - Optimized */}
              <div className="metrics-showcase">
                {/* Hero Metric - Time Saved */}
                <div className="hero-metric">
                  <div className="hero-icon">⚡</div>
                  <div className="hero-content">
                    <div className="hero-label">Time Saved</div>
                    <div className="hero-value">87%</div>
                    <div className="hero-comparison">vs. manual translation</div>
                    <div className="hero-detail">Completed in 5.2 hours instead of 40+ hours</div>
                  </div>
                </div>
                
                {/* Supporting Metrics */}
                <div className="supporting-metrics">
                  <div className="metric-card compact">
                    <div className="metric-icon">📝</div>
                    <div className="metric-content">
                      <div className="metric-value">3,247</div>
                      <div className="metric-label">words translated</div>
                      <div className="metric-change">+15% vs avg project</div>
                    </div>
                  </div>
                  <div className="metric-card compact">
                    <div className="metric-icon">💰</div>
                    <div className="metric-content">
                      <div className="metric-value">$1,247</div>
                      <div className="metric-label">saved on this project</div>
                      <div className="metric-change">3x ROI achieved</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Breakdown */}
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

          {/* Iteration 3 specific content */}
          {iteration === 'iteration3' && (
            <div className="iteration-3-content">
              {/* Time Distribution Bar - enhanced with hover */}
              <div className="time-distribution">
                <div className="distribution-bar">
                  <div className="ai-distribution pulse" style={{ width: '2%' }} title="AI Translation: 27 seconds"></div>
                  <div className="distribution-gap" style={{ width: '1%' }}></div>
                  <div className="human-distribution" style={{ width: '97%' }} title="Human Review: 4.5 hours"></div>
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

              {/* Insight Section - Moved up and enhanced */}
              <div className="insight-section">
                <p>
                  <strong>💡 Pro tip:</strong> You can reduce human review time by up to 70% and deliver even faster results by optimizing your{' '}
                  <a href="#" className="insight-link">AI translation preferences</a>
                </p>
                <button className="optimize-cta">Optimize AI Settings →</button>
              </div>

              {/* Metrics Grid - Optimized */}
              <div className="metrics-showcase">
                {/* Hero Metric - Time Saved */}
                <div className="hero-metric">
                  <div className="hero-icon">⚡</div>
                  <div className="hero-content">
                    <div className="hero-label">Time Saved</div>
                    <div className="hero-value">87%</div>
                    <div className="hero-comparison">vs. manual translation</div>
                    <div className="hero-detail">Completed in 5.2 hours instead of 40+ hours</div>
                  </div>
                </div>
                
                {/* Supporting Metrics */}
                <div className="supporting-metrics">
                  <div className="metric-card compact">
                    <div className="metric-icon">📝</div>
                    <div className="metric-content">
                      <div className="metric-value">3,247</div>
                      <div className="metric-label">words translated</div>
                      <div className="metric-change">+15% vs avg project</div>
                    </div>
                  </div>
                  <div className="metric-card compact">
                    <div className="metric-icon">💰</div>
                    <div className="metric-content">
                      <div className="metric-value">$1,247</div>
                      <div className="metric-label">saved on this project</div>
                      <div className="metric-change">3x ROI achieved</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Breakdown */}
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
              
              {/* Personalization & Benchmarks */}
              <div className="personalization-section">
                <h3>Your Translation Performance</h3>
                <div className="performance-insights">
                  <div className="insight-card">
                    <div className="insight-icon">🏆</div>
                    <div className="insight-text">
                      <strong>75% faster</strong> than the industry average for technical documentation
                    </div>
                  </div>
                  <div className="insight-card">
                    <div className="insight-icon">📈</div>
                    <div className="insight-text">
                      <strong>$12,470 saved</strong> across your 10 projects this quarter
                    </div>
                  </div>
                  <div className="insight-card">
                    <div className="insight-icon">🎯</div>
                    <div className="insight-text">
                      Your AI accuracy improved <strong>23%</strong> since your first project
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Social Proof */}
              <div className="social-proof-section">
                <div className="trust-badge">
                  <span className="trust-icon">🛡️</span>
                  <span className="trust-text">Trusted by 10,000+ companies worldwide</span>
                </div>
                <div className="testimonial">
                  <p>"Smartcat reduced our localization time by 80% while maintaining quality. It's a game-changer."</p>
                  <div className="testimonial-author">– Sarah Chen, Localization Manager at TechCorp</div>
                </div>
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
    </div>
  );
};

export default EmailTemplate;