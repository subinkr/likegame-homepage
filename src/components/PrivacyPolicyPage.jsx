import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, FileText, Calendar, User, Settings, ChevronDown, ChevronUp, CheckCircle, AlertCircle, Info } from 'lucide-react';
import './PrivacyPolicyPage.css';

const PrivacyPolicyPage = () => {
  const [expandedSections, setExpandedSections] = useState({});



  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const buildSection = (id, title, description, items = [], icon = null, color = 'blue') => {
    const isExpanded = expandedSections[id] !== false;
    const colorClass = `section-${color}`;

    return (
      <div className="privacy-section" key={id}>
        <div 
          className={`section-card ${colorClass}`}
          onClick={() => toggleSection(id)}
        >
          <div className="section-header">
            <div className="section-title-area">
              {icon && (
                <div className={`section-icon ${colorClass}`}>
                  {icon}
                </div>
              )}
              <h2 className="section-title">{title}</h2>
            </div>
            <div className={`section-toggle ${colorClass}`}>
              {isExpanded ? <ChevronUp className="toggle-icon" /> : <ChevronDown className="toggle-icon" />}
            </div>
          </div>
          
          {description && (
            <p className="section-description">{description}</p>
          )}
          
          {isExpanded && items.length > 0 && (
            <div className="section-items">
              {items.map((item, index) => (
                <div 
                  key={index} 
                  className="section-item"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`item-bullet ${colorClass}`}></div>
                  <span className="item-text">{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  const buildSubSection = (title, items = [], color = 'blue') => {
    const colorClass = `subsection-${color}`;

    return (
      <div className={`subsection ${colorClass}`}>
        <h3 className="subsection-title">
          <div className={`subsection-indicator ${colorClass}`}></div>
          {title}
        </h3>
        <div className="subsection-items">
          {items.map((item, index) => (
            <div key={index} className="subsection-item">
              <div className={`subsection-bullet ${colorClass}`}></div>
              <span className="subsection-text">{item}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="privacy-page">
      {/* 배경 장식 요소들 */}
      <div className="background-decoration">
        <div className="decoration-circle circle-1"></div>
        <div className="decoration-circle circle-2"></div>
        <div className="decoration-circle circle-3"></div>
      </div>



      {/* 메인 콘텐츠 */}
      <main className="privacy-main">
        {/* 제목 섹션 */}
        <div className="title-section">
          <div className="title-badge">
            <Shield className="badge-icon" />
            <span className="badge-text">Privacy Policy</span>
          </div>
          <h1 className="main-title">LikeGame</h1>
          <p className="main-subtitle">개인정보 처리방침</p>
          <div className="title-underline"></div>
          
          {/* 추가 정보 카드 */}
          <div className="info-cards">
            <div className="info-card">
              <div className="info-icon">
                <CheckCircle className="card-icon green" />
              </div>
              <h3 className="info-title">안전한 보호</h3>
              <p className="info-description">최신 보안 기술로 개인정보를 안전하게 보호합니다</p>
            </div>
            <div className="info-card">
              <div className="info-icon">
                <Eye className="card-icon blue" />
              </div>
              <h3 className="info-title">투명한 처리</h3>
              <p className="info-description">개인정보 수집 및 이용에 대한 투명한 안내</p>
            </div>
            <div className="info-card">
              <div className="info-icon">
                <User className="card-icon purple" />
              </div>
              <h3 className="info-title">사용자 권리</h3>
              <p className="info-description">개인정보에 대한 열람, 정정, 삭제 권리 보장</p>
            </div>
          </div>
        </div>

        <div className="content-sections">
          {/* 1. 개인정보의 처리 목적 */}
          {buildSection(
            'purpose',
            '1. 개인정보의 처리 목적',
            'LikeGame은 다음과 같은 목적으로 개인정보를 처리합니다:',
            [
              '서비스 제공 및 계정 관리',
              '사용자 인증 및 보안',
              '서비스 개선 및 개발',
              '고객 지원 및 문의 응답',
            ],
            <Settings className="section-icon-svg" />,
            'blue'
          )}

          {/* 2. 수집하는 개인정보 항목 */}
          <div className="privacy-section">
            <div className="section-card section-green">
              <div className="section-header">
                <div className="section-title-area">
                  <div className="section-icon section-green">
                    <FileText className="section-icon-svg" />
                  </div>
                  <h2 className="section-title">2. 수집하는 개인정보 항목</h2>
                </div>
              </div>
              
              {buildSubSection('2.1 필수 수집 항목', [
                '이메일 주소 (회원가입 및 로그인용)',
                '사용자 ID (서비스 내 고유 식별자)',
                '퀘스트 및 스킬 데이터 (서비스 이용 기록)',
              ], 'green')}
              
              {buildSubSection('2.2 자동 수집 항목', [
                'IP 주소',
                '접속 로그',
                '쿠키 및 세션 정보',
                '기기 정보 (브라우저, OS 등)',
              ], 'emerald')}
            </div>
          </div>

          {/* 3. 개인정보의 보유 및 이용기간 */}
          {buildSection(
            'retention',
            '3. 개인정보의 보유 및 이용기간',
            '회원 탈퇴 시까지 또는 법정 보유기간',
            [
              '회원 정보: 회원 탈퇴 시까지',
              '서비스 이용 기록: 회원 탈퇴 후 30일',
              '로그 데이터: 1년',
            ],
            <Calendar className="section-icon-svg" />,
            'purple'
          )}

          {/* 4. 개인정보의 제3자 제공 */}
          {buildSection(
            'third-party',
            '4. 개인정보의 제3자 제공',
            'LikeGame은 원칙적으로 개인정보를 제3자에게 제공하지 않습니다. 다만, 다음의 경우에는 예외로 합니다:',
            [
              '사용자가 사전에 동의한 경우',
              '법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우',
            ],
            <Lock className="section-icon-svg" />,
            'orange'
          )}

          {/* 5. 개인정보의 파기 */}
          {buildSection(
            'destruction',
            '5. 개인정보의 파기',
            '개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.',
            [],
            <Eye className="section-icon-svg" />,
            'indigo'
          )}

          {/* 6. 개인정보 보호책임자 */}
          <div className="privacy-section">
            <div className="section-card section-special">
              <div className="section-header">
                <div className="section-title-area">
                  <div className="section-icon section-blue">
                    <User className="section-icon-svg" />
                  </div>
                  <h2 className="section-title">6. 개인정보 보호책임자</h2>
                </div>
              </div>
              
              <div className="contact-card">
                <h3 className="contact-title">
                  <Shield className="contact-icon" />
                  개인정보 보호책임자
                </h3>
                <div className="contact-info">
                  <div className="contact-item">
                    <span className="contact-label">이름:</span>
                    <span className="contact-value">강수빈</span>
                  </div>
                  <div className="contact-item">
                    <span className="contact-label">이메일:</span>
                    <span className="contact-value contact-email">support@likegame.life</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 7. 개인정보의 안전성 확보 조치 */}
          {buildSection(
            'security',
            '7. 개인정보의 안전성 확보 조치',
            'LikeGame은 개인정보보호법 제29조에 따라 다음과 같은 안전성 확보 조치를 취하고 있습니다:',
            [
              '개인정보의 암호화',
              '해킹 등에 대비한 기술적 대책',
              '개인정보에 대한 접근 제한',
              '개인정보 취급 직원의 최소화 및 교육',
            ],
            <Shield className="section-icon-svg" />,
            'blue'
          )}

          {/* 8. 개인정보 처리방침 변경 */}
          {buildSection(
            'changes',
            '8. 개인정보 처리방침 변경',
            '이 개인정보 처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.',
            [],
            <FileText className="section-icon-svg" />,
            'green'
          )}

          {/* 9. 개인정보의 열람, 정정, 삭제, 처리정지 */}
          {buildSection(
            'rights',
            '9. 개인정보의 열람, 정정, 삭제, 처리정지',
            '사용자는 개인정보보호법 제35조에 따라 개인정보의 열람, 정정, 삭제, 처리정지를 요구할 수 있습니다. 이에 대한 요구는 개인정보 보호책임자에게 서면, 전화, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며, 이에 대해 지체없이 조치하겠습니다.',
            [],
            <Settings className="section-icon-svg" />,
            'purple'
          )}

          {/* 시행일자 */}
          <div className="effective-date">
            <div className="date-content">
              <div className="date-header">
                <div className="date-icon">
                  <Calendar className="date-icon-svg" />
                </div>
                <h3 className="date-title">시행일자</h3>
              </div>
              <p className="date-text">
                본 개인정보 처리방침은 2025년 8월 18일부터 시행됩니다.
              </p>
            </div>
          </div>


        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicyPage;
