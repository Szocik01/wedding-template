import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

type ContactProps = {
  contactInformation: {
    firstName: string;
    lastName: string;
    role: string;
    phone: string;
    photoUrl: string;
  }[];
};

const Contact = (props: ContactProps) => {
  const { contactInformation } = props;

  return (
    <div className="contact">
      <div className="row">
        <div className="col-12">
          <h2 className="title decorative mb-5">Kontakt</h2>
        </div>
        <div className="col-12">
          <Swiper
            modules={[Pagination]}
            spaceBetween={50}
            pagination={{ clickable: true }}
            breakpoints={{
                0: {
                    slidesPerView: 1,
                },
                550: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                992: {
                    slidesPerView: 4,
                },
                1200: {
                    slidesPerView: 5,
                }
            }}
          >
            {contactInformation.map((contact, index) => (
              <SwiperSlide key={index}>
                <div className="contact-card">
                  <div className="image-container">
                    <img src={contact.photoUrl} alt="" />
                  </div>
                  <div className="name decorative">
                    {contact.firstName} {contact.lastName}
                  </div>
                  <div className="role">{contact.role}</div>
                  <div className="phone">{contact.phone}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Contact;
