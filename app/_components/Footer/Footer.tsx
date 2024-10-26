import { CategoryItems, Item, itemsCenter, itemsLeft } from "@/constant/items";
import { Container, Typography, Box, Divider, Button } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import CategoriesList from "../CategoriesList/CategoriesList";
// assets import
import tikkaLogo from "@/public/tikkaLogo.png";
import logo1 from "@/public/Logos/1.png";
import logo2 from "@/public/Logos/2.png";
import logo3 from "@/public/Logos/3.png";
import logo4 from "@/public/Logos/4.png";
import logo5 from "@/public/Logos/5.png";
import callCalling from "@/public/icons/call-calling.png";
import socials from "@/public/icons/socials.png";
import icoUpLeft from "@/public/icons/ico_UpLeft.png";
import icoUpCenter from "@/public/icons/ico_UpCenter.png";
import icoUpRight from "@/public/icons/ico_UpRight.png";
import arrowUp from "@/public/icons/arrow-up.png";

interface UpBoxItem {
  id: number;
  icon: StaticImageData;
  title: string;
}
interface FooterSection {
  title: string;
  items: Item[];
}

const upBoxItems: UpBoxItem[] = [
  { id: 1, icon: icoUpLeft, title: "دسترسی به بهترین استادها" },
  { id: 2, icon: icoUpCenter, title: "هر قیمتی با بازگشت وجه" },
  { id: 3, icon: icoUpRight, title: "برنامه ریزی قدم به قدم تا هدف" },
];

const footerSections: FooterSection[] = [
  { title: "خدمات ما", items: itemsCenter },
  { title: "اطلاعات تکمیلی", items: itemsLeft },
];

const Footer: React.FC = () => {
  return (
    <footer>
      {/* the empty space above footer */}
      <Box sx={{ height: "102.5px" }} />

      {/* the Main container and bg green footer */}
      <Box
        component="footer"
        sx={{
          backgroundColor: "#00262F",
          color: "#fff",
          paddingTop: "102px",
          position: "relative",
          bottom: 0,
          minHeight: "887px",
          maxWidth: "1536px",
          width: "100%",
          paddingX: { xs: 2, md: 4 },
          margin: "0 auto",
        }}
      >
        {/* Top white Box with Images and Text */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            backgroundColor: "#F7FBFC",
            padding: "20px",
            borderRadius: "8px",
            width: "956px",
            position: "absolute",
            top: "-102px",
            left: "50%",
            transform: "translateX(-50%)",
            height: "205px",
          }}
        >
          {upBoxItems.map((item) => (
            <Box
              sx={{
                display: "flex",
                width: "15%",
                flexDirection: "column",
                gap: "8px",
                alignItems: "center",
              }}
              key={item.id}
            >
              <Image
                src={item.icon}
                alt={item.title}
                style={{ width: "80px", height: "80px" }}
              />
              <Typography
                variant="caption"
                color="#004049"
                fontSize={16}
                textAlign={"center"}
              >
                {item.title}
              </Typography>
            </Box>
          ))}
        </Box>
        {/* go up button */}
        <Button
          sx={{
            position: "absolute",
            padding:"15px",
            borderRadius: "50%",
            backgroundColor: "#4DAFB5",
            top: "-40px",
            right: "67px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          href="#"
        >
          <Image src={arrowUp} alt="arrowUp" />
        </Button>

        {/* the main container of content */}
        <Container
          maxWidth="lg"
          sx={{ paddingTop: "100px", paddingBottom: "20px", width: "1004px" }}
        >
          {/* Three main Columns  */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "80px",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            {/* first right columns */}
            <Box
              sx={{
                flex: 1.5,
                margin: "0 10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Image src={tikkaLogo} alt="Tikka Logo" />
              <Typography variant="h6" color="#99D1D5" fontSize={16}>
                آموزش آنلاین زبان با آکادمی آنلاین تیکا
              </Typography>
              <Typography
                variant="body1"
                fontSize={14}
                textAlign={"justify"}
                lineHeight={2}
              >
                برای پیشرفت در تخصص و یا مهاجرت، یادگیری و تقویت زبان غیرقابل
                اجتناب است. با توجه به نوع زندگی امروزی و کمبود وقت کافی و مناسب
                برای یادگیری و همچنین هزینه های بالا و عدم دسترسی به معلم خصوصی
                حرفه ای، یادگیری و ارتقاء سطح زبان برای پیشرفت، تقریبا به
                فراموشی سپرده می شود.
              </Typography>
              <Typography variant="body2">
                <span style={{ fontSize: "18px" }}>•</span> همه روزه از ساعت
                ۹:۳۰ تا ۱۸ در کنار شما هستیم
              </Typography>
            </Box>

            {footerSections.map((section) => (
              <Box
                key={section.title}
                sx={{
                  flex: 1,
                  margin: "0 10px",
                  borderRight: "1px solid #66BABF",
                  paddingRight: "15px",
                  position: "relative",
                }}
              >
                <Typography variant="h6" color="#99D1D5">
                  {section.title}
                </Typography>
                <ul style={{ paddingInlineStart: "20px" }}>
                  {section.items.map((item) => (
                    <li
                      key={item.id}
                      style={{
                        padding: "7px 0",
                      }}
                    >
                      <Link href={item.link}>
                        <Typography
                          fontSize={15}
                          sx={{
                            "&:hover": {
                              color: "#99D1D5",
                            },
                          }}
                        >
                          {item.title}
                        </Typography>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Box>
            ))}
          </Box>

          {/* List of Categories Tag */}
          <Box sx={{ display: "flex", margin: "20px 0" }}>
            <CategoriesList
              tags={CategoryItems}
              limit={6}
              moreLink="/more-tags"
            />
          </Box>

          {/* Logos Row */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              margin: "35px 0 25px 0",
              width: "full",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "360px",
              }}
            >
              {[logo1, logo2, logo3, logo4, logo5].map((logo, index) => (
                <Link key={index} href="#">
                  <Image
                    src={logo}
                    alt={`Logo ${index + 1}`}
                    style={{ width: "65px", height: "65px" }}
                  />
                </Link>
              ))}
            </Box>
          </Box>

          {/* Divider line */}
          <Divider sx={{ margin: "10px 0", backgroundColor: "#fff" }} />

          {/* Copyright */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "30px",
              fontSize: "12px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={callCalling}
                alt="Call Icon"
                style={{ width: "20px", height: "20px", marginLeft: "8px" }}
              />
              <Link href="#">
                تلفن پشتیبانی : <span dir="ltr"> ۰۲۱-۹۱۰۱۶۶۲۰ </span>
              </Link>
            </Box>
            <Typography variant="body2" fontSize={12}>
              تمامی حقوق سایت متعلق به تیکا؛ پلتفرم جست و جو و انتخاب استاد
              آنلاین زبان و معلم خصوصی می باشد.
            </Typography>
            <Link
              href="#"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Image
                src={socials}
                alt="Socials Icon"
                style={{ cursor: "pointer" }}
              />
            </Link>
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
