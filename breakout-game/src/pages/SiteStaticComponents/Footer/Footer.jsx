import s from './Footer.module.css'

export const Footer = () => {
  return (
    <footer className={`${s.footerPosition} page-footer`}>
      <div class="footer-copyright">
        <div class="container">
        2021 With the support of RS Shool
        <a class="grey-text text-lighten-4 right" href="https://github.com/Andrei107Q">Creator</a>
        </div>
      </div>
    </footer>
  )
}