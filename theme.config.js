const YEAR = new Date().getFullYear()

export default {
  footer: (
    <footer>
      <small>
        <time>{YEAR}</time> © Sakhiseni.
        
      </small>
      <style jsx>{`
        footer {
          margin-top: 8rem;
        }
        a {
          
          float: right;
        }
      `}</style>
    </footer>
  ),
}
