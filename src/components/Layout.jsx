export default function Layout({ children }) {
  return (
    <div className="layout">
      <header className="header">
        <h1 className="title">Dancing Maltese</h1>
        <p className="subtitle">하얀 말티즈의 신나는 댄스 파티!</p>
      </header>
      <main className="main-content">
        {children}
      </main>
      <footer className="footer">
        <p>클릭하고 말티즈와 함께 춤을 춰보세요!</p>
      </footer>
    </div>
  )
}
