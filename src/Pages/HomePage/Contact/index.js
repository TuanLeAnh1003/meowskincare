import React, { useEffect } from "react";
import ContactItem from "../../../Components/ContactItem";
import "./Contact.css";

function Contact() {
	const contactList = [
		{
			title: "ĐỊA CHỈ",
			icon: "location-dot",
			content: [
				"64/15 Nguyên Hồng",
				"Phường 1, Quận Gò Vấp",
				"Thành phố Hồ Chí Minh",
			],
		},
		{
			title: "GIỜ MỞ CỬA",
			icon: "clock",
			content: [
				"Thứ 2 - Thứ 6: 8h00 - 20h00",
				"Thứ 7: 8h00 - 21h00",
				"Chủ nhật: 8h00 - 21h30",
			],
		},
		{
			title: "EMAIL",
			icon: "envelope",
			content: [
				"MeowSkinCare@gmail.com",
				"19522009@gm.uit.edu.vn",
				"nduyan1601@gmail.com",
			],
		},
		{
			title: "ĐIỆN THOẠI",
			icon: "phone",
			content: [
				"Anh An - 0938269974",
				"Anh Phong - 093569712",
				"Anh Hưng - 0908926975",
			],
		},
	];

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<div className='contact'>
			<div className='contact-image'>
				<div className='contact-image-title'>LIÊN HỆ NGAY</div>
				<div className='contact-image-line'></div>
				<div className='contact-image-content'>
				SkinCare tại MeowSkinCare
				</div>
			</div>

			<div className='contact-body'>
				<div className='contact-body-left'>
					<div className='contact-body-left-title'>THÔNG TIN LIÊN LẠC</div>
					<div className='contact-body-left-desc'>
					SkinCare tại MeowSkinCare
					</div>
					<div className='contact-body-left-list'>
						{contactList.map((element, index) => (
							<ContactItem
								key={index}
								title={element.title}
								icon={element.icon}
								content={element.content}
							></ContactItem>
						))}
					</div>
				</div>
				<div className='contact-body-right'>
					<div className='contact-body-right-title'>LIÊN HỆ VỚI CHÚNG TÔI</div>
					<div className="contact-body-right-desc">Gửi ngay thông tin phản hồi sớm nhất cho chúng tôi:</div>
          <form className="contact-body-right-form">
            <label>Họ và tên</label><br/>
            <input type="text" name="name" id="name" placeholder="Nhập họ và tên"/><br/>
            <label>Email</label><br/>
            <input type="email" name="email" id="email" placeholder="Nhập email"/><br/>
            <label>Điện thoại</label><br/>
            <input type="text" name="phone" id="phone" placeholder="Nhập điện thoại"/><br/>
            <label>Nội dung</label><br/>
            <textarea type="text" name="content" id="content" placeholder="Nhập phản hồi của bạn"/><br/>
            <input type="submit" value="GỬI NGAY  "/>
          </form>
				</div>
			</div>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.8972087331563!2d106.68827161462293!3d10.819177892292483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528ef05b21115%3A0x95a90a3c2fdeae3d!2zNjQsIDE1IE5ndXnDqm4gSOG7k25nLCBQaMaw4budbmcgMSwgR8OyIFbhuqVwLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmggMDcwMDAwLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1649698866760!5m2!1svi!2s" style={{width: "100%", height: "600px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="address"></iframe>
		</div>
	);
}

export default Contact;
