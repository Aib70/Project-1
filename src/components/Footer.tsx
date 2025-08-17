
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>Giới thiệu</h3>
          <p>
            Trang web này chia sẻ thông tin, hình ảnh và văn hóa về người dân tộc Mông tại Việt Nam.
          </p>
        </div>

        <div className="footer-links">
          <h3>Liên kết</h3>
          <ul>
            <li><a href="/">Trang chủ</a></li>
            <li><a href="/about">Giới thiệu</a></li>
            <li><a href="/contact">Liên hệ</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Liên hệ</h3>
          <p>Email: info@mongculture.vn</p>
          <p>Điện thoại: 0123 456 789</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Văn hóa Mông - All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
