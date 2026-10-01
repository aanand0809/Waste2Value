:root {
  --primary: #163f2c;
  --primary-deep: #102d22;
  --secondary: #1d8a5d;
  --accent: #b8f245;
  --lime: #dffb7d;
  --background: #f4f8f3;
  --surface: #ffffff;
  --surface-alt: #edf7ee;
  --border: rgba(22, 63, 44, 0.12);
  --text: #173328;
  --muted: #5a7268;
  --success: #2b9a68;
  --warning: #d0912d;
  --shadow: 0 22px 48px rgba(17, 53, 41, 0.1);
  --radius: 22px;
  --radius-sm: 14px;
  --max-width: 1180px;
}

body.dark {
  --primary: #d8f5db;
  --primary-deep: #a9e6b7;
  --secondary: #69d39c;
  --accent: #d8ff6d;
  --background: #091b16;
  --surface: #112a24;
  --surface-alt: #132f2a;
  --border: rgba(168, 222, 180, 0.12);
  --text: #ecfff2;
  --muted: #b6d5c1;
  --success: #7fe7a8;
  --shadow: 0 20px 40px rgba(0, 0, 0, 0.28);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: linear-gradient(180deg, var(--background) 0%, #eef6f0 100%);
  color: var(--text);
  line-height: 1.6;
}

body.dark {
  background: linear-gradient(180deg, var(--background) 0%, #0b1a18 100%);
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

button,
input,
select,
textarea {
  font: inherit;
}

button {
  cursor: pointer;
}

.container {
  width: min(var(--max-width), calc(100% - 32px));
  margin: 0 auto;
}

.section {
  padding: 90px 0;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 30;
  backdrop-filter: blur(14px);
  background: rgba(244, 248, 243, 0.85);
  border-bottom: 1px solid var(--border);
}

body.dark .site-header {
  background: rgba(9, 27, 22, 0.78);
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 78px;
  gap: 24px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  font-size: 1.2rem;
  color: var(--primary);
}

.brand-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--secondary), var(--accent));
  box-shadow: var(--shadow);
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 18px;
  color: var(--muted);
  font-weight: 600;
}

.main-nav a {
  transition: color 0.3s ease;
}

.main-nav a:hover,
.main-nav a.active {
  color: var(--primary);
}

.theme-toggle,
.nav-toggle,
.modal-close {
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text);
}

.theme-toggle {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  transition: transform 0.2s ease;
}

.theme-toggle:hover {
  transform: translateY(-2px);
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 999px;
  padding: 0.9rem 1.4rem;
  font-weight: 700;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: #fff;
  box-shadow: 0 16px 30px rgba(33, 107, 76, 0.25);
}

.btn-secondary {
  background: rgba(33, 120, 86, 0.08);
  color: var(--primary);
  border: 1px solid rgba(22, 63, 44, 0.1);
}

.btn-block {
  width: 100%;
  margin-top: 20px;
}

.small {
  padding: 0.7rem 1.1rem;
  font-size: 0.9rem;
}

.nav-cta {
  padding-inline: 1.1rem;
}

.hero {
  padding: 80px 0 60px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 42px;
}

.eyebrow {
  display: inline-flex;
  padding: 0.5rem 0.8rem;
  border-radius: 999px;
  background: rgba(34, 121, 86, 0.08);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.68rem;
  color: var(--primary);
}

.text-green {
  color: var(--primary);
}

.hero-copy h1,
.section-heading h2,
.form-intro h1,
.dashboard-topbar h1,
.leaderboard-section h1,
.profile-card h1,
.summary-profile h1,
.recycler-head h1 {
  margin: 16px 0 16px;
  line-height: 1.1;
  color: var(--primary);
  letter-spacing: -0.04em;
}

.hero-copy h1 {
  font-size: clamp(2.6rem, 4vw, 4.5rem);
}

.hero-copy p {
  max-width: 560px;
  color: var(--muted);
  font-size: 1.08rem;
  margin-bottom: 28px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 28px;
}

.hero-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  font-size: 0.96rem;
  color: var(--muted);
}

.hero-badges span {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--surface);
  border: 1px solid var(--border);
  padding: 0.7rem 0.9rem;
  border-radius: 999px;
  box-shadow: 0 8px 24px rgba(17, 53, 41, 0.04);
}

.hero-visual {
  position: relative;
  display: grid;
  place-items: center;
  min-height: 480px;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(8px);
  opacity: 0.85;
}

.orb-one {
  width: 210px;
  height: 210px;
  background: rgba(153, 224, 111, 0.25);
  right: 40px;
  top: 32px;
}

.orb-two {
  width: 260px;
  height: 260px;
  background: rgba(26, 132, 92, 0.14);
  left: 50px;
  bottom: 30px;
}

.recycling-scene {
  position: relative;
  width: min(100%, 440px);
  height: 420px;
  border-radius: 32px;
  background: linear-gradient(145deg, rgba(255,255,255,0.88), rgba(232,246,232,0.78));
  box-shadow: var(--shadow);
  border: 1px solid rgba(255,255,255,0.4);
}

body.dark .recycling-scene {
  background: linear-gradient(145deg, rgba(17,42,36,0.94), rgba(16,45,34,0.8));
}

.bin {
  position: absolute;
  bottom: 50px;
  width: 100px;
  height: 136px;
  background: rgba(255,255,255,0.7);
  border-radius: 22px;
  border: 1px solid rgba(17,53,41,0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-shadow: 0 18px 32px rgba(17, 53, 41, 0.08);
}

body.dark .bin {
  background: rgba(18, 42, 35, 0.8);
}

.bin span {
  font-size: 2rem;
}

.bin small {
  font-weight: 700;
  color: var(--text);
}

.bin-plastic { left: 34px; }
.bin-paper { left: 150px; }
.bin-metal { left: 266px; }

.recycle-ring {
  position: absolute;
  left: 50%;
  top: 42%;
  transform: translate(-50%, -50%);
  width: 170px;
  height: 170px;
  border-radius: 50%;
  border: 10px solid rgba(24, 122, 87, 0.25);
  display: grid;
  place-items: center;
  background: rgba(255,255,255,0.25);
}

.recycle-ring span {
  font-size: 4rem;
  color: var(--secondary);
}

.floating-card {
  position: absolute;
  background: rgba(255,255,255,0.9);
  border: 1px solid rgba(17,53,41,0.08);
  border-radius: 16px;
  padding: 0.85rem 1rem;
  box-shadow: 0 12px 30px rgba(17, 53, 41, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
}

body.dark .floating-card {
  background: rgba(18, 42, 35, 0.9);
}

.floating-card strong {
  font-size: 1.4rem;
  color: var(--primary);
}

.floating-card span {
  color: var(--muted);
  font-size: 0.82rem;
}

.card-top { right: 26px; top: 48px; }
.card-bottom { left: 52px; bottom: 20px; }

.section-heading {
  margin-bottom: 36px;
}

.section-heading.centered {
  text-align: center;
}

.section-heading h2 {
  font-size: clamp(2rem, 3vw, 3rem);
}

.steps-grid,
.impact-grid,
.category-grid,
.stats-grid {
  display: grid;
  gap: 24px;
}

.steps-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.step-card,
.impact-card,
.category-card,
.panel-card,
.stats-card,
.profile-card,
.badges-block,
.badge-progress,
.profile-form,
.waste-form {
  background: rgba(255,255,255,0.7);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

body.dark .step-card,
body.dark .impact-card,
body.dark .category-card,
body.dark .panel-card,
body.dark .stats-card,
body.dark .profile-card,
body.dark .badges-block,
body.dark .badge-progress,
body.dark .profile-form,
body.dark .waste-form {
  background: rgba(17,42,36,0.86);
}

.step-card {
  padding: 1.6rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.step-card:hover,
.category-card:hover,
.impact-card:hover {
  transform: translateY(-5px);
}

.step-number {
  font-weight: 800;
  color: var(--secondary);
  font-size: 0.84rem;
  margin-bottom: 18px;
}

.step-card h3,
.category-card h3 {
  margin: 0 0 10px;
  color: var(--primary);
}

.step-card p,
.category-card p,
.form-intro p,
.panel-card p,
.city {
  color: var(--muted);
}

.impact-section {
  background: linear-gradient(180deg, rgba(153, 224, 111, 0.06), rgba(255,255,255,0));
}

.impact-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.impact-card {
  padding: 2rem 1.5rem;
  text-align: center;
  overflow: hidden;
}

.stat-label {
  display: block;
  color: var(--muted);
  margin-bottom: 14px;
  font-size: 0.95rem;
}

.stat-value {
  font-size: clamp(1.7rem, 2vw, 2.6rem);
  color: var(--primary);
}

.category-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.category-card {
  padding: 1.8rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.category-icon {
  font-size: 2.2rem;
}

.site-footer {
  padding: 24px 0 50px;
  border-top: 1px solid var(--border);
}

.footer-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  color: var(--muted);
}

.footer-brand {
  font-weight: 700;
}

.page-container {
  padding: 60px 0 90px;
}

.form-shell {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 26px;
  align-items: start;
}

.form-intro {
  padding-top: 8px;
}

.waste-form,
.profile-form {
  padding: 1.8rem;
}

.field-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.field-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 18px;
}

label {
  font-weight: 700;
  color: var(--primary);
}

input,
select,
textarea {
  width: 100%;
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 0.9rem 1rem;
  background: rgba(255,255,255,0.8);
  color: var(--text);
}

body.dark input,
body.dark select,
body.dark textarea {
  background: rgba(9, 23, 18, 0.7);
  color: var(--text);
}

input:focus,
select:focus,
textarea:focus,
button:focus {
  outline: 3px solid rgba(39, 150, 108, 0.22);
  outline-offset: 2px;
}

.points-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(184, 242, 69, 0.18);
  border: 1px solid rgba(33, 137, 90, 0.15);
  border-radius: 16px;
  padding: 1rem 1.1rem;
  margin-top: 10px;
  color: var(--primary);
  font-weight: 700;
}

.dashboard-shell {
  display: flex;
  min-height: 100vh;
}

.dashboard-sidebar {
  width: 280px;
  background: linear-gradient(180deg, var(--surface), rgba(236,247,236,0.9));
  border-right: 1px solid var(--border);
  padding: 28px 20px;
  position: sticky;
  top: 0;
  height: 100vh;
}

body.dark .dashboard-sidebar {
  background: linear-gradient(180deg, rgba(17,42,36,0.96), rgba(10,25,21,0.96));
}

.sidebar-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.18rem;
  font-weight: 700;
  margin-bottom: 28px;
  color: var(--primary);
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;
}

.sidebar-nav a {
  display: block;
  padding: 0.8rem 0.9rem;
  border-radius: 12px;
  color: var(--muted);
  font-weight: 600;
}

.sidebar-nav a.active,
.sidebar-nav a:hover {
  background: rgba(31, 123, 88, 0.08);
  color: var(--primary);
}

.sidebar-card {
  background: linear-gradient(135deg, rgba(35,118,86,0.08), rgba(184,242,69,0.16));
  border: 1px solid rgba(35,118,86,0.12);
  border-radius: 18px;
  padding: 1.1rem;
}

.small-label {
  margin: 0 0 8px;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.72rem;
  font-weight: 700;
}

.sidebar-card strong {
  font-size: 1.5rem;
  color: var(--primary);
}

.mini-progress,
.progress-track {
  width: 100%;
  height: 10px;
  border-radius: 999px;
  background: rgba(23, 51, 40, 0.1);
  overflow: hidden;
  margin-top: 10px;
}

.progress-fill {
  height: 100%;
  width: 0;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--secondary), var(--accent));
  transition: width 0.6s ease;
}

.dashboard-main {
  flex: 1;
  padding: 30px 26px 60px;
}

.dashboard-topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 28px;
}

.topbar-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.dashboard-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.stats-card {
  padding: 1.5rem 1.2rem;
}

.stats-card strong {
  display: block;
  font-size: clamp(1.4rem, 2vw, 2.5rem);
  margin-bottom: 6px;
  color: var(--primary);
}

.stats-card small {
  color: var(--muted);
}

.impact-panel,
.panel-card {
  background: rgba(255,255,255,0.7);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  margin-top: 28px;
  padding: 1.4rem 1.5rem;
}

body.dark .impact-panel,
body.dark .panel-card {
  background: rgba(17,42,36,0.86);
}

.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;
}

.panel-header h2 {
  margin: 0;
  font-size: 1.2rem;
  color: var(--primary);
}

.progress-label {
  margin-top: 12px;
  color: var(--muted);
}

.activity-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 12px;
}

.activity-list li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 0.9rem 0.8rem;
  background: rgba(32, 125, 90, 0.04);
  border: 1px solid var(--border);
  border-radius: 12px;
}

.activity-list strong {
  color: var(--primary);
}

.activity-list span {
  color: var(--muted);
}

.recycler-shell {
  max-width: 1200px;
}

.recycler-head {
  display: flex;
  justify-content: space-between;
  align-items: end;
}

.recycler-toolbar {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 28px;
  flex-wrap: wrap;
}

.filter-group {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.filter-btn,
.leaderboard-tab {
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text);
  border-radius: 999px;
  padding: 0.72rem 1rem;
  font-weight: 700;
}

.filter-btn.active,
.leaderboard-tab.active {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: #fff;
  border-color: transparent;
}

.search-box {
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--primary);
  font-weight: 700;
}

.recycler-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.recycler-card {
  background: rgba(255,255,255,0.7);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 1.35rem;
}

body.dark .recycler-card {
  background: rgba(17,42,36,0.86);
}

.recycler-card-header,
.recycler-meta,
.recycler-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.recycler-card h3 {
  margin: 0 0 8px;
  color: var(--primary);
}

.recycler-meta {
  margin: 12px 0;
  color: var(--muted);
  font-size: 0.94rem;
}

.status {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  padding: 0.38rem 0.7rem;
  font-size: 0.74rem;
  font-weight: 700;
}

.status.available {
  background: rgba(52, 160, 103, 0.12);
  color: var(--success);
}

.status.pending {
  background: rgba(208, 145, 45, 0.12);
  color: var(--warning);
}

.recycler-card .rating {
  font-weight: 700;
  color: var(--text);
}

.recycler-actions {
  margin-top: 18px;
}

.modal {
  position: fixed;
  inset: 0;
  display: none;
  place-items: center;
  z-index: 100;
}

.modal.open {
  display: grid;
}

.modal-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(8, 22, 17, 0.42);
}

.modal-dialog {
  position: relative;
  width: min(620px, calc(100% - 28px));
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 1.8rem;
  z-index: 2;
  box-shadow: var(--shadow);
}

body.dark .modal-dialog {
  background: var(--surface);
}

.modal-close {
  position: absolute;
  right: 12px;
  top: 12px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  font-size: 1.4rem;
}

.modal-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.leaderboard-section {
  padding-top: 40px;
}

.leaderboard-tabs {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 28px;
  flex-wrap: wrap;
}

.leaderboard-top {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
  margin-bottom: 28px;
}

.winner-card {
  background: linear-gradient(135deg, rgba(184,242,69,0.12), rgba(31, 127, 91, 0.08));
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 1.5rem;
  text-align: center;
}

.winner-card:nth-child(2) {
  transform: translateY(12px);
}

.winner-card h3,
.winner-card strong {
  color: var(--primary);
}

.winner-rank {
  font-size: 2rem;
  margin-bottom: 10px;
}

.leaderboard-table-wrap {
  overflow-x: auto;
  background: rgba(255,255,255,0.7);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

body.dark .leaderboard-table-wrap {
  background: rgba(17,42,36,0.86);
}

.leaderboard-table {
  width: 100%;
  min-width: 700px;
  border-collapse: collapse;
}

.leaderboard-table th,
.leaderboard-table td {
  padding: 1rem 1.1rem;
  text-align: left;
  border-bottom: 1px solid var(--border);
}

.leaderboard-table thead {
  background: rgba(15, 108, 81, 0.06);
}

.profile-wrap {
  padding-top: 40px;
}

.profile-grid {
  display: grid;
  grid-template-columns: 350px 1fr;
  gap: 24px;
}

.summary-profile {
  padding: 1.8rem;
  text-align: center;
}

.avatar {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: #fff;
  display: grid;
  place-items: center;
  margin: 0 auto 20px;
  font-size: 2rem;
  font-weight: 700;
}

.profile-score {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  padding: 0.7rem 0.8rem;
  border-radius: 12px;
  background: rgba(25, 118, 84, 0.05);
  color: var(--muted);
}

.profile-score strong {
  color: var(--primary);
}

.profile-main {
  display: grid;
  gap: 22px;
}

.profile-stats {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}

.mini-stat {
  background: rgba(255,255,255,0.7);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 1.2rem 1rem;
  box-shadow: var(--shadow);
}

body.dark .mini-stat {
  background: rgba(17,42,36,0.86);
}

.mini-stat span {
  display: block;
  color: var(--muted);
  margin-bottom: 8px;
}

.mini-stat strong {
  color: var(--primary);
  font-size: 1.5rem;
}

.badges-block,
.badge-progress {
  padding: 1.3rem 1.5rem;
}

.badge-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 12px;
}

.badge-list span {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border-radius: 999px;
  background: rgba(184,242,69,0.12);
  padding: 0.6rem 0.9rem;
  color: var(--primary);
  font-weight: 700;
}

.empty-state {
  display: grid;
  place-items: center;
  padding: 2rem;
  text-align: center;
  color: var(--muted);
  border: 1px dashed var(--border);
  border-radius: 18px;
  background: rgba(255,255,255,0.45);
}

.toast {
  position: fixed;
  right: 20px;
  bottom: 20px;
  background: var(--primary);
  color: #fff;
  border-radius: 14px;
  padding: 0.9rem 1.1rem;
  box-shadow: var(--shadow);
  transform: translateY(20px);
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease;
  z-index: 200;
}

.toast.show {
  opacity: 1;
  transform: translateY(0);
}

.nav-toggle {
  display: none;
  width: 46px;
  height: 46px;
  border-radius: 12px;
  background: var(--surface);
  padding: 0;
}

.nav-toggle span {
  display: block;
  width: 20px;
  height: 2px;
  background: var(--text);
  margin: 5px auto;
  border-radius: 999px;
}

@media (max-width: 1200px) {
  .steps-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .impact-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .category-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .dashboard-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .profile-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 992px) {
  .nav-toggle {
    display: block;
  }

  .main-nav {
    position: absolute;
    top: calc(100% + 8px);
    left: 16px;
    right: 16px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 18px;
    padding: 1rem;
    flex-direction: column;
    align-items: flex-start;
    display: none;
    box-shadow: var(--shadow);
  }

  .main-nav.open {
    display: flex;
  }

  .nav-wrap {
    position: relative;
  }

  .form-shell {
    grid-template-columns: 1fr;
  }

  .dashboard-shell {
    display: block;
  }

  .dashboard-sidebar {
    width: 100%;
    height: auto;
    position: relative;
    border-right: none;
    border-bottom: 1px solid var(--border);
  }

  .leaderboard-top {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero-grid,
  .field-grid,
  .profile-stats,
  .recycler-grid,
  .leaderboard-top,
  .dashboard-grid {
    grid-template-columns: 1fr;
  }

  .steps-grid,
  .impact-grid,
  .category-grid {
    grid-template-columns: 1fr;
  }

  .hero {
    padding-top: 40px;
  }

  .hero-copy h1 {
    font-size: 2.5rem;
  }

  .hero-visual {
    min-height: 350px;
  }

  .recycling-scene {
    transform: scale(0.9);
  }

  .modal-grid {
    grid-template-columns: 1fr;
  }

  .footer-wrap,
  .dashboard-topbar,
  .panel-header,
  .recycler-toolbar {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 576px) {
  .section {
    padding: 72px 0;
  }

  .site-header {
    position: sticky;
  }

  .brand {
    font-size: 1.05rem;
  }

  .hero-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .btn,
  .btn-primary,
  .btn-secondary {
    width: 100%;
  }

  .main-nav .btn {
    width: auto;
  }

  .recycler-toolbar {
    align-items: stretch;
  }

  .search-box {
    width: 100%;
  }
}
