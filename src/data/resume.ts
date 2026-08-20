import type { ResumeData } from '../types'

export const resumeData: ResumeData = {
  personal: {
    name: '손가현',
    nameEn: 'Gahyun Son',
    tagline: '사용자와 비즈니스를 연결하는 프론트엔드 개발자',
    email: 'gahyun.son6@gmail.com',
    github: 'https://github.com/gahyunson',
    linkedin: 'https://www.linkedin.com/in/gahyun-son/',
    blog: 'https://chelsey-records.tistory.com/',
    resumePdfUrl: '/RESUME_GAHYUNSON.docx.pdf',
    resumeWordUrl: '/RESUME_GAHYUNSON.docx',
    coreTechnologies: ['React', 'TypeScript', 'MUI', 'Python'],
  },
  about: {
    // About me
    paragraphs: [
      '사용자와 비즈니스를 연결하며, 웹·모바일 환경의 문제를 해결해 온 프론트엔드 개발자입니다.',
      'React·Next.js·TypeScript 기반으로 개인 운동 분석 리포트 서비스와 클럽·기관 대상 운동 데이터 관리 SaaS의 웹·모바일 프론트엔드를 개발했습니다.',
      '장시간 작업의 비동기 처리, Flutter WebView 인증 동기화, 다국어·Locale UI, 대량 데이터 업로드처럼 실제 서비스 흐름에서 발생하는 문제를 다뤘습니다.',
      '사용자 흐름 설계, 실용적 기술 선택, 플랫폼 연동 문제 해결을 통해 사용자와 비즈니스에 가치를 제공하는 프론트엔드 개발자가 되고자 합니다.',
    ],
    strengths: [
      {
        icon: '🧩',
        title: '사용자 흐름 설계',
        description:
          '단계형 UI, 진행 상태 표시, 데이터 사전 로딩 등 사용자가 서비스를 이용하는 흐름을 기준으로 화면을 설계합니다.',
      },
      {
        icon: '⚡',
        title: '플랫폼 연동 문제 해결',
        description:
          'Flutter WebView와 React 사이의 인증, 알림, 오류 로그 전달처럼 웹과 모바일이 만나는 지점의 문제를 해결해 왔습니다.',
      },
      {
        icon: '🤝',
        title: '실용적 기술 선택',
        description:
          '실시간성, 사용자 규모, 구현 복잡도, 유지보수성을 비교해 현재 요구사항에 맞는 기술과 구조를 선택합니다.',
      },
    ],
  },
  skills: [
    {
      title: 'Frontend',
      icon: '🖥',
      skills: [
        { name: 'React', level: 'expert' },
        { name: 'TypeScript', level: 'advanced' },
        { name: 'JavaScript', level: 'advanced' },
        { name: 'Next.js', level: 'intermediate' },
        { name: 'MUI', level: 'advanced' },
        { name: 'Redux Toolkit', level: 'advanced' },
        // { name: 'Styled-components', level: 'intermediate' },
      ],
    },
    {
      title: 'Mobile',
      icon: '📱',
      skills: [
        { name: 'Flutter WebView', level: 'advanced' },
        { name: 'JavaScript Channel', level: 'advanced' },
        { name: 'Firebase Cloud Messaging', level: 'intermediate' },
        { name: 'Dart', level: 'intermediate' },
      ],
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'Django REST Framework', level: 'advanced' },
        { name: 'Django', level: 'advanced' },
        { name: 'Python', level: 'advanced' },
        { name: 'REST API', level: 'advanced' },
        { name: 'Celery', level: 'intermediate' },
        { name: 'Redis', level: 'intermediate' },
      ],
    },
    {
      title: 'Tools',
      icon: '🛠',
      skills: [
        { name: 'i18next', level: 'advanced' },
        { name: 'react-i18next', level: 'advanced' },
        { name: 'Swagger UI', level: 'advanced' },
        { name: 'Git', level: 'advanced' },
        { name: 'MySQL', level: 'intermediate' },
      ],
    },
  ],
  experience: [
    {
      id: 'exp-1',
      company: '(주)엑스퍼스',
      role: '웹·모바일 프론트엔드 개발자',
      period: { start: '2024.12.09', end: '2026.08.31' },
      location: '서울',
      description:
        '개인 회원 대상 운동 측정·분석 리포트 서비스 Vapor-P와 클럽·기관 대상 운동 데이터 관리 SaaS Papor의 웹·모바일 프론트엔드 개발을 담당했습니다.',
      technologies: [
        'React',
        'Next.js',
        'TypeScript',
        'MUI',
        'Redux Toolkit',
        'Flutter WebView',
        'Django REST Framework',
        'Celery',
        'Redis',
        'Swagger UI',
      ],
      achievements: [
        '대량 AI 운동 처방 생성 중 UI가 차단되는 문제를 Celery 기반 비동기 처리와 Polling 진행 상태 조회로 개선',
        '의존성이 없는 초기화 작업과 API 요청을 Promise.all로 병렬화해 초기 로딩 시간을 개발 환경 49.09ms에서 8.30ms로 단축',
        'Excel 일괄 업로드와 필수값·데이터 형식 검증을 구현해 신규 고객의 회원 데이터 이전과 내부 등록 대행 업무를 줄임',
        'React Error Boundary 오류 정보를 JavaScript Channel로 Flutter에 전달해 iOS WebView 런타임 오류 추적 가능',
        'Three.js 기반 운동 진행 프로그램에서 반복 방식, 좌우 동작, 휴식 알림, PRS/RPE 데이터 수집 구현',
        '한국어, 영어, 스페인어, 브라질식 포르투갈어, 포르투갈식 포르투갈어를 지원하는 다국어 UI와 날짜·단위·통화 Locale 처리 구현',
      ],
    },
    {
      id: 'exp-2',
      company: '(주)헬스피디아',
      role: '백엔드 개발 인턴',
      period: { start: '2023.09.01', end: '2023.12.31' },
      location: '서울',
      description:
        '당뇨병 환자를 위한 운동 콘텐츠 웹 서비스의 API 개발과 병원 급여·비급여 데이터 유지보수를 담당했습니다.',
      technologies: ['Django', 'Python', 'MySQL', 'REST API'],
      achievements: [
        'Django 기반 운동 목록, 운동 상세 조회, 회원가입 및 로그인 API 개발',
        'Serializer를 활용한 API 응답 로직 구성',
        'MySQL SQL을 활용해 병원 급여·비급여 항목과 가격 데이터를 전처리·정제·가공',
      ],
    },
  ],
  projects: [
    {
      id: 'proj-1',
      title: 'Papor — 회원, 운동 데이터 관리 SaaS',
      summary:
        '피트니스 센터와 전문 축구단 등 클럽·기관이 회원·선수의 측정 결과, 일정, 이벤트, 멤버십을 관리하는 B2B SaaS 플랫폼입니다.',
      contribution:
        'React·Next.js·TypeScript 기반 웹 프론트엔드와 MUI 기반 반응형 UI, 단계형 사용자 흐름, API 로딩·캐싱·사전 요청 구조를 구현했습니다.',
      highlights: [
        {
          title: '대량 AI 운동 처방 비동기 생성',
          description:
            'Celery·Redis 기반 비동기 처리와 Polling 진행 상태 조회 UI를 구현해, 여러 회원의 처방 생성 중 화면이 멈추는 문제를 개선했습니다.',
        },
        {
          title: '초기 로딩 성능 개선',
          description:
            '의존성이 없는 초기화 작업과 API 요청을 Promise.all로 병렬화해 개발 환경 기준 초기 로딩 시간을 49.09ms에서 8.30ms로 단축했습니다.',
        },
        {
          title: 'Excel 회원 일괄 등록',
          description:
            '필수값·데이터 형식 검증을 포함한 Excel 업로드를 구현해 신규 고객의 회원 데이터 이전과 내부 등록 대행 업무를 줄였습니다.',
        },
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'MUI', 'Redux Toolkit'],
      featured: true,
    },
    {
      id: 'proj-2',
      title: 'Vapor-P — 운동 측정, 처방 및 일정 관리 서비스',
      summary:
        '개인 회원이 운동 측정 결과와 분석 리포트를 조회하는 B2C 서비스입니다.',
      contribution:
        '개인·회원용 운동 측정 앱에서 React 기반 웹 앱 전반을 개발하고, Flutter WebView 및 Django API와 연동했습니다. 회원 인증·푸시 알림·네이티브 통신, 3D 운동 수행·타이머·수행률 관리, WebView 오류 추적, 다국어 UI와 성능 개선을 담당했습니다.',
      highlights: [
        {
          title: 'WebView 인증·오류 추적',
          description:
            'Flutter와 React의 JWT 인증 상태를 동기화하고, Error Boundary 오류 정보를 JavaScript Channel로 전달해 iOS WebView 디버깅을 개선했습니다.',
        },
        {
          title: 'Three.js 운동 진행 프로그램',
          description:
            '반복 방식, 좌우 동작, 휴식 알림과 3D 모델 방향 전환을 구현하고 PRS/RPE 데이터를 수집해 처방 적합성 평가에 활용할 수 있게 했습니다.',
        },
        {
          title: '다국어·Locale UI',
          description:
            '한국어·영어·스페인어·브라질식/포르투갈식 포르투갈어를 지원하고 날짜·단위·통화를 각 Locale에 맞게 처리했습니다.',
        },
      ],
      technologies: ['React', 'TypeScript', 'MUI', 'i18next', 'react-i18next'],
      featured: true,
    },
    // {
    //   id: 'proj-3',
    //   title: '대량 AI 운동 처방 비동기 생성',
    //   summary:
    //     '여러 회원의 AI 운동 처방 생성 시 장시간 처리로 인해 UI가 차단되는 문제를 개선한 기능입니다.',
    //   contribution:
    //     'WebSocket과 Polling을 비교한 뒤 실시간성 요구 수준과 구현 복잡도를 고려해 Polling을 선택했고, Celery·Redis 기반 비동기 처리와 진행 상태 조회 UI를 구현했습니다.',
    //   technologies: ['React', 'Django REST Framework', 'Celery', 'Redis', 'Polling'],
    //   featured: true,
    // },
    {
      id: 'proj-4',
      title: 'WebView 인증·오류 추적',
      summary:
        'Flutter WebView 기반 앱에서 React 화면의 인증 상태와 런타임 오류를 앱 레이어와 연결한 작업입니다.',
      contribution:
        'Flutter와 React의 JWT 인증 상태를 동기화하고, React Error Boundary에서 수집한 오류 정보를 JavaScript Channel로 Flutter에 전달해 iOS WebView 디버깅을 개선했습니다.',
      technologies: ['Flutter WebView', 'React', 'JavaScript Channel', 'JWT'],
    },
    {
      id: 'proj-5',
      title: 'Three.js 운동 진행 프로그램',
      summary:
        '처방 운동을 사용자가 따라 할 수 있도록 3D 애니메이션과 운동 진행 상태를 제어하는 프로그램입니다.',
      contribution:
        '운동 순서, 반복 방식, 좌우 동작, 휴식 알림, 3D 모델 방향 전환을 구현하고 PRS/RPE 데이터를 수집해 처방 적합성 평가에 활용할 수 있도록 했습니다.',
      technologies: ['Three.js', 'React', 'TypeScript'],
    },
    {
      id: 'proj-6',
      title: 'Excel 회원 일괄 등록',
      summary:
        '신규 고객의 기존 회원 데이터를 서비스에 대량 등록할 수 있도록 지원한 업로드 기능입니다.',
      contribution:
        'Excel 파일 업로드, 필수값 검증, 데이터 형식 검증을 구현해 반복 입력과 개발팀의 수작업 등록 대행을 줄였습니다.',
      technologies: ['React', 'TypeScript', 'Django REST Framework', 'Excel Upload'],
    },
  ],
  education: [
    {
      id: 'edu-1',
      type: 'education',
      title: '컴퓨터과학과',
      institution: '한국방송통신대학교',
      period: '2021.03 – 2023.08',
      description: '복수전공: 통계학과',
    },
    {
      id: 'edu-2',
      type: 'education',
      title: '물리치료과',
      institution: '부산보건대학교',
      period: '2012.03 – 2015.02',
    },
    {
      id: 'cert-1',
      type: 'certificate',
      title: 'Azure Fundamentals',
      institution: 'Microsoft',
      period: '2023.06',
    },
  ],
}
