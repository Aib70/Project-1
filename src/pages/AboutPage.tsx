
import "./AboutPage.scss"

const AboutPage = () => {
  return (
    <div className="hmong-container">
      <header className="hmong-header">
        <h1>Giới thiệu về Dân tộc Mông</h1>
        <p>Vẻ đẹp văn hóa, truyền thống và con người vùng cao</p>
      </header>

      <section className="hmong-section">
  <h2>1. Khái quát</h2>
  <div className="hmong-content">
    <p>
      Người Mông là một trong những dân tộc thiểu số sinh sống chủ yếu ở
      vùng núi phía Bắc Việt Nam như Hà Giang, Lào Cai, Sơn La, Điện Biên.
      Họ nổi tiếng với các lễ hội truyền thống, trang phục rực rỡ và kỹ
      thuật dệt thổ cẩm tinh xảo.
    </p>
    <img
      src="https://luhanhvietnam.com.vn/du-lich/vnt_upload/news/08_2022/tim-hieu-ve-dan-toc-mong-4.jpg"
      alt="Người Mông ở Việt Nam"
      className="hmong-image"
    />
  </div>
</section>

      <section className="hmong-section">
        <h2>2. Trang phục</h2>
        <div className="hmong-content">
        <p>
          Trang phục của người Mông được làm thủ công, với hoa văn thổ cẩm đặc
          trưng. Mỗi vùng người Mông có phong cách riêng, từ màu sắc, họa tiết
          cho đến kiểu dáng.
        </p>
        <img
          src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXeQP9dOyQmqJml9VA-0F4ir5ykZ9JNq4vDEwD4f3wDj24tjYsnK7-FY4v-vqDdznDVRgDTLXDLDq-VUcwhA7yVv70hKbLCPP-veahVrkJFHAhVwlC_QU1M9GkUIVWGEwI45NDBaGw?key=qPnZ88PVjAtRdQuwdb2WPxdB"
          alt="Trang phục truyền thống người Mông"
          className="hmong-image"
        />
        </div>
      </section>

      <section className="hmong-section">
        <h2>3. Lễ hội</h2>
        <div className="hmong-content">
        <p>
          Lễ hội Gầu Tào là một trong những lễ hội truyền thống nổi bật của dân
          tộc Mông, thường diễn ra vào dịp đầu năm để cầu may mắn, sức khỏe và
          mùa màng bội thu.
        </p>
         <img
          src="https://cdnmedia.baotintuc.vn/Upload/a7srThwxbojBCucvUWgnxA/files/2020/01/04/gau-tao12134.jpg"
          alt="Lễ hội của người mông"
          className="hmong-image"
        />
        </div>
      </section>

      <section className="hmong-section">
        <h2>4. Văn hóa & Ẩm thực</h2>
         <div className="hmong-content">
        <p>
          Ẩm thực người Mông phong phú với các món ăn truyền thống như thắng cố,
          mèn mén, rượu ngô. Đây là những nét ẩm thực đặc trưng của vùng cao
          nguyên đá.
        </p>
         
         <img
          src="https://baodaklak.vn/file/fb9e3a03798789de0179a1704dea238e/old-data/dataimages/201411/original/images1008568_bd.jpg"
          alt="Lễ hội của người mông"
          className="hmong-image"
        />
        </div>
      </section>

      <footer className="hmong-footer">
        <p>&copy; 2025 Giới thiệu Dân tộc Mông - Thiết kế bởi Bạn</p>
      </footer>
    </div>
  );
};

export default AboutPage;
