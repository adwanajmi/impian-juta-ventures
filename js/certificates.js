// ============================================================
//  SIJIL SHOWCASE — js/certificates.js
// ============================================================

// ── Certificate data ──
const certificates = [
  {
    id: 'ssm-reg',
    category: 'pendaftaran',
    issuer: 'SSM Malaysia',
    title: 'Perakuan Pendaftaran Perniagaan',
    subtitle: 'Akta Pendaftaran Perniagaan 1956 (Akta 197)',
    icon: '🏛️',
    badge: 'SSM',
    badgeClass: '',
    validity: 'Sah hingga 29 Julai 2026',
    isValid: true,
    details: {
      'No. Pendaftaran': '201303003987 (002192046-P)',
      'Tarikh Mula': '04 Januari 2013',
      'Tarikh Luput': '29 Julai 2026',
      'Alamat': 'No. 20B, Jalan MJ/1, Taman Maju Jaya, PJ',
      'Status': 'Aktif',
    },
  },
  {
    id: 'ssm-info',
    category: 'pendaftaran',
    issuer: 'SSM Malaysia',
    title: 'Maklumat Perniagaan (e-Info)',
    subtitle: 'Jenis Perniagaan & Pemilik Terkini',
    icon: '📋',
    badge: 'SSM',
    badgeClass: '',
    validity: 'Sah hingga 29 Julai 2026',
    isValid: true,
    details: {
      'Bentuk Perniagaan': 'Perkongsian',
      'Tarikh Mula Berniaga': '04 Januari 2013',
      'Tarikh Luput Pendaftaran': '29 Julai 2026',
      'Status': 'Aktif',
      'Pemilik': 'Atiqah Binti Muslim & Ahmad Qushairi Bin Muslim',
    },
  },
  {
    id: 'cidb-perakuan',
    category: 'cidb',
    issuer: 'CIDB Malaysia',
    title: 'Perakuan Pendaftaran Kontraktor',
    subtitle: 'Lembaga Pembangunan Industri Pembinaan Malaysia',
    icon: '🏗️',
    badge: 'CIDB G3',
    badgeClass: '',
    validity: 'Sah hingga 10 Nov 2027',
    isValid: true,
    details: {
      'No. Pendaftaran': '0120160919-SL179182',
      'Gred': 'G3',
      'Kategori B': 'B04 B05 B09 B14 B15 B24',
      'Kategori CE': 'CE01 CE06 CE21 CE36 CE42 CE43',
      'Kategori ME': 'M15',
      'Tarikh Berkuatkuasa': '13 November 2024',
      'Tarikh Luput': '10 November 2027',
      'Status': 'Aktif',
    },
  },
  {
    id: 'cidb-spkk',
    category: 'cidb',
    issuer: 'CIDB Malaysia',
    title: 'Sijil Perolehan Kerja Kerajaan',
    subtitle: 'Kategori B, CE & ME — Gred G3',
    icon: '📜',
    badge: 'SPKK',
    badgeClass: '',
    validity: 'Sah hingga 10 Nov 2027',
    isValid: true,
    details: {
      'No. Pendaftaran': '0120160919-SL179182',
      'Kategori': 'B (Pembinaan Bangunan), CE (Kej. Awam), ME (M&E)',
      'Tarikh Mula Berdaftar': '19 September 2016',
      'Tarikh Berkuatkuasa': '14 November 2024',
      'Tarikh Luput': '10 November 2027',
    },
  },
  {
    id: 'cidb-score',
    category: 'cidb',
    issuer: 'CIDB Malaysia',
    title: 'Certificate of Achievement — SCORE',
    subtitle: '2 Star Rating for Year 2017',
    icon: '⭐',
    badge: '2 Bintang',
    badgeClass: 'gold',
    validity: 'Rekod Pencapaian',
    isValid: true,
    details: {
      'No. Sijil': 'D 04124',
      'Rating': '2 Star (SCORE Criteria)',
      'Tahun': '2017',
      'Dikeluarkan oleh': 'CIDB Selangor',
      'Tarikh': '01 Februari 2017',
    },
  },
  {
    id: 'mof-reg',
    category: 'mof',
    issuer: 'Kementerian Kewangan Malaysia',
    title: 'Sijil Akuan Pendaftaran Syarikat',
    subtitle: 'Perolehan Kerajaan',
    icon: '💰',
    badge: 'MOF',
    badgeClass: '',
    validity: 'Sah hingga 05 Julai 2026',
    isValid: true,
    details: {
      'No. Sijil': 'K66494202793514038',
      'No. Rujukan Pendaftaran': '357-02275339',
      'Tempoh Sah Laku': '03/05/2023 – 05/07/2026',
      'Tarikh Berdaftar': '03 Mei 2023',
    },
  },
  {
    id: 'mof-bumi',
    category: 'mof',
    issuer: 'Kementerian Kewangan Malaysia',
    title: 'Sijil Akuan Pendaftaran Syarikat Bumiputera',
    subtitle: 'Diiktiraf Syarikat Bumiputera',
    icon: '🇲🇾',
    badge: 'Bumiputera',
    badgeClass: 'gold',
    validity: 'Sah hingga 05 Julai 2026',
    isValid: true,
    details: {
      'No. Sijil': 'BP66494202793514038',
      'No. Rujukan Pendaftaran': '357-02275339',
      'Tempoh Sah Laku': '03/05/2023 – 05/07/2026',
      'Taraf': 'Syarikat Bumiputera',
      'Tarikh Berdaftar': '03 Mei 2023',
    },
  },
  {
    id: 'upen',
    category: 'pendaftaran',
    issuer: 'UPEN Selangor',
    title: 'Pengesahan Pendaftaran Syarikat',
    subtitle: 'Sistem Tender Online Selangor 2.0',
    icon: '📋',
    badge: 'UPEN',
    badgeClass: '',
    validity: 'Aktif',
    isValid: true,
    details: {
      'No. Pendaftaran': '002192046-P',
      'Daerah': 'Petaling',
      'No. Sijil CIDB': '0120160919-SL179182',
      'Tarikh Sah CIDB': '13 Nov 2024 – 10 Nov 2027',
      'No. MOF': '357-02275339',
      'Tarikh Sah MOF': '03 Mei 2023 – 05 Jul 2026',
      'Kod Pengesahan Sijil': 'RSHEJUT5',
    },
  },
  {
    id: 'lhdn-tcc',
    category: 'cukai',
    issuer: 'LHDN Malaysia',
    title: 'Sijil Pematuhan Cukai (TCC)',
    subtitle: 'Bagi Permohonan Perolehan Kerajaan',
    icon: '🧾',
    badge: 'PATUH',
    badgeClass: '',
    validity: 'Tarikh Janaan: 16 Jan 2025',
    isValid: true,
    details: {
      'Nama': 'Ahmad Qushairi Bin Muslim',
      'No. Cukai': '940313045219',
      'No. IG': 'IG 25729213060',
      'Status': 'PATUH',
      'Tarikh Janaan Sijil': '16 Januari 2025',
      'Tarikh Luput Sijil': '31 Disember 2025',
    },
  },
  {
    id: 'kwsp',
    category: 'pendaftaran',
    issuer: 'KWSP / EPF Malaysia',
    title: 'Sijil Pendaftaran Majikan',
    subtitle: 'Akta KWSP 1991 — Seksyen 41(1)',
    icon: '👷',
    badge: 'KWSP',
    badgeClass: '',
    validity: 'Berdaftar sejak Mei 2017',
    isValid: true,
    details: {
      'No. Pendaftaran Majikan': '20615788',
      'Tarikh Berdaftar': '04 Mei 2017',
      'Caruman Bermula': 'Jun 2017',
      'No. Syarikat': '002192046-P',
    },
  },
  {
    id: 'pkk-bumi',
    category: 'mof',
    issuer: 'Pusat Khidmat Kontraktor (PKK)',
    title: 'Sijil Taraf Bumiputera — Kontraktor Kerja',
    subtitle: 'Kementerian Pembangunan Usahawan dan Koperasi',
    icon: '🏅',
    badge: 'Bumiputera',
    badgeClass: 'gold',
    validity: 'Sah hingga 10 Nov 2027',
    isValid: true,
    details: {
      'No. Sijil Pendaftaran': '0120160919-SL179182',
      'Gred': 'G3 — Kategori B, CE, ME',
      'Tempoh Sah Laku': '24 Dis 2024 – 10 Nov 2027',
      'Dikeluarkan oleh': 'Pengarah, Pusat Khidmat Kontraktor',
      'Tarikh': '24 Disember 2024',
    },
  },
  {
    id: 'cidb-integriti',
    category: 'kursus',
    issuer: 'CIDB Selangor / SPRM / IIM',
    title: 'Sijil Pencapaian — Kursus Integriti & Kod Etika Kontraktor',
    subtitle: 'Ahmad Qushairi Bin Muslim',
    icon: '🎖️',
    badge: 'Kursus',
    badgeClass: '',
    validity: '26 April 2017',
    isValid: true,
    details: {
      'Peserta': 'Ahmad Qushairi Bin Muslim',
      'No. KP': '940313-04-5219',
      'Kursus': 'Integriti dan Kod Etika Kontraktor',
      'Tarikh': '26 April 2017',
      'Penganjur': 'CIDB Negeri Selangor',
      'No. Kelulusan': 'CIDBSL/A/2017/0020 (10 mata)',
    },
  },
  {
    id: 'kursus-bangunan',
    category: 'kursus',
    issuer: 'Afha Training Services / CIDB',
    title: 'Sijil Penyertaan — Penyelenggaraan Bangunan & Pengurusan Projek',
    subtitle: 'Ahmad Qushairi Bin Muslim',
    icon: '📚',
    badge: 'Kursus',
    badgeClass: '',
    validity: '13–14 Jun 2017',
    isValid: true,
    details: {
      'Peserta': 'Ahmad Qushairi Bin Muslim',
      'Kursus': 'Penyelenggaraan Bangunan & Pengurusan Projek',
      'Tarikh': '13 Jun & 14 Jun 2017',
      'Tempat': 'Bilik Latihan CIDB Negeri Selangor, Wisma PKNS Shah Alam',
      'No. Kelulusan': 'CIDBSL/C/2017/0449 (20 Mata CCD)',
    },
  },
  {
    id: 'kursus-pengurusan',
    category: 'kursus',
    issuer: 'CIDB Negeri Selangor',
    title: 'Sijil Kecekapan Pengurusan — Pengurusan Bisnes',
    subtitle: 'Ahmad Qushairi Bin Muslim',
    icon: '💼',
    badge: 'Kursus',
    badgeClass: '',
    validity: '25–28 Sep 2017',
    isValid: true,
    details: {
      'Peserta': 'Ahmad Qushairi Bin Muslim',
      'Kursus': 'Pengurusan Bisnes',
      'Tarikh': '25 September – 28 September 2017',
      'Penganjur': 'CIDB Negeri Selangor',
      'Keputusan': 'LULUS',
    },
  },
  {
    id: 'mata-aircraft',
    category: 'kursus',
    issuer: 'Malaysian Aviation Training Academy (MATA)',
    title: 'Certificate of Completion — Basic Aircraft Maintenance Engineer',
    subtitle: 'Ahmad Qushairi Bin Muslim',
    icon: '✈️',
    badge: 'DCAM',
    badgeClass: '',
    validity: '26 September 2014',
    isValid: true,
    details: {
      'Peserta': 'Ahmad Qushairi Bin Muslim',
      'Kursus': 'Basic Aircraft Maintenance Engineer Course (DCAM Part-66 Category B1.1)',
      'Tarikh Selesai': '26 September 2014',
      'No. Sijil': 'MATA 0830',
      'Diluluskan oleh': 'Department of Civil Aviation Malaysia (DCA)',
    },
  },
];

// ── Render cards ──
function renderCertificates(filter = 'all') {
  const grid = document.getElementById('certGrid');
  grid.innerHTML = '';

  const filtered = filter === 'all'
    ? certificates
    : certificates.filter(c => c.category === filter);

  filtered.forEach((cert, i) => {
    const card = document.createElement('div');
    card.className = 'cert-card';
    card.style.opacity    = '0';
    card.style.transform  = 'translateY(20px)';
    card.style.transition = `opacity 0.4s ease ${i * 0.05}s, transform 0.4s ease ${i * 0.05}s`;

    card.innerHTML = `
      <div class="cert-thumb">
        <div class="cert-thumb-icon">${cert.icon}</div>
        <span class="cert-badge ${cert.badgeClass}">${cert.badge}</span>
      </div>
      <div class="cert-body">
        <div class="cert-issuer">${cert.issuer}</div>
        <div class="cert-title">${cert.title}</div>
        <div class="cert-meta">${cert.subtitle}</div>
        <div class="cert-validity ${cert.isValid ? 'valid' : 'expired'}">
          ${cert.isValid ? '✓' : '✗'} ${cert.validity}
        </div>
      </div>
    `;

    card.addEventListener('click', () => openLightbox(cert));
    grid.appendChild(card);

    // Trigger animation
    requestAnimationFrame(() => {
      setTimeout(() => {
        card.style.opacity   = '1';
        card.style.transform = 'translateY(0)';
      }, 20);
    });
  });
}

// ── Lightbox ──
function openLightbox(cert) {
  const lb = document.getElementById('certLightbox');

  document.getElementById('lbTitle').textContent    = cert.title;
  document.getElementById('lbSubtitle').textContent = cert.issuer + ' — ' + cert.subtitle;
  document.getElementById('lbIcon').textContent     = cert.icon;

  const rows = document.getElementById('lbRows');
  rows.innerHTML = Object.entries(cert.details).map(([k, v]) => `
    <div class="cert-detail-row">
      <span class="cert-detail-lbl">${k}</span>
      <span class="cert-detail-val">${v}</span>
    </div>
  `).join('');

  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('certLightbox').classList.remove('open');
  document.body.style.overflow = '';
}

// ── Filter buttons ──
function initFilters() {
  const btns = document.querySelectorAll('.cert-filter-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCertificates(btn.dataset.filter);
    });
  });
}

// ── Close lightbox on backdrop click or Escape ──
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
});

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  renderCertificates('all');
  initFilters();
});
