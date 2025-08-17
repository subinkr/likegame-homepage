# LikeGame Landing Page

LikeGame의 공식 랜딩페이지입니다. 일상의 작업을 epic quest로 변환하는 gamified task management 앱을 소개합니다.

## 🚀 주요 특징

- **Modern React Design**: React 18 + Vite를 사용한 최신 프론트엔드 스택
- **Glassmorphism UI**: 트렌디한 glass morphism 디자인
- **Smooth Animations**: Framer Motion을 활용한 부드러운 애니메이션
- **Mobile-First**: 모바일 우선 반응형 디자인
- **SEO Optimized**: 완전한 SEO 메타태그 및 구조화된 데이터
- **Cross-Platform**: 웹, iOS, Android 플랫폼 정보 제공

## 📋 섹션 구성

1. **Hero Section**: 메인 헤드라인과 앱 목업, 다운로드 버튼
2. **Features Section**: 6가지 핵심 기능 소개
3. **How It Works**: 4단계 사용 프로세스
4. **Platform Section**: 웹/iOS/Android 플랫폼 정보
5. **CTA Section**: 최종 전환 유도 및 통계

## 🛠️ 기술 스택

- **Frontend**: React 18, Vite
- **Styling**: CSS3, CSS Variables, Flexbox/Grid
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build**: Vite
- **Deployment Ready**: Vercel, Netlify 호환

## 🚀 시작하기

### 설치

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview
```

### 개발 서버

개발 서버는 기본적으로 `http://localhost:5173`에서 실행됩니다.

## 📱 반응형 디자인

- **Mobile**: 320px - 768px
- **Tablet**: 769px - 1024px  
- **Desktop**: 1025px+
- **Large Screen**: 1440px+

## 🎨 디자인 시스템

### 색상 팔레트
- **Primary Gradient**: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- **Secondary Gradient**: `linear-gradient(45deg, #f093fb 0%, #f5576c 100%)`
- **Accent Gradient**: `linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)`

### 타이포그래피
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800

### 애니메이션
- **Transition**: `cubic-bezier(0.4, 0, 0.2, 1)`
- **Bounce**: `cubic-bezier(0.68, -0.55, 0.265, 1.55)`

## 📂 프로젝트 구조

```
likegame-homepage/
├── src/
│   ├── components/
│   │   ├── HeroSection.jsx
│   │   ├── FeaturesSection.jsx
│   │   ├── HowItWorksSection.jsx
│   │   ├── PlatformSection.jsx
│   │   └── CTASection.jsx
│   ├── styles/
│   │   └── responsive.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
└── package.json
```

## 🔧 커스터마이징

### 색상 변경
`src/index.css`의 CSS 변수를 수정하여 브랜드 색상을 변경할 수 있습니다:

```css
:root {
  --primary-gradient: your-gradient-here;
  --secondary-gradient: your-gradient-here;
  --accent-gradient: your-gradient-here;
}
```

### 콘텐츠 수정
각 섹션 컴포넌트에서 텍스트, 링크, 이미지를 수정할 수 있습니다.

### 애니메이션 조정
Framer Motion의 `transition` 속성을 수정하여 애니메이션 속도와 타이밍을 조정할 수 있습니다.

## 📈 성능 최적화

- ✅ Lazy Loading 구현
- ✅ Image Optimization 준비
- ✅ CSS Minification
- ✅ Tree Shaking (Vite)
- ✅ Code Splitting 준비

## 🌐 배포

### Vercel
```bash
npm run build
# Vercel에 업로드
```

### Netlify
```bash
npm run build
# dist 폴더를 Netlify에 드래그 앤 드롭
```

## 📊 SEO 및 메타태그

완전한 SEO 최적화가 적용되어 있습니다:
- Open Graph 태그
- Twitter Card 태그
- 구조화된 데이터
- 메타 설명 및 키워드

## 🤝 기여하기

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다.

## 📞 연락처

LikeGame Team - info@likegame.life

Project Link: [https://github.com/likegame/homepage](https://github.com/likegame/homepage)