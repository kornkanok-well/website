import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const images = [
  {
    id: 0,
    tag: 'Art',
    images: ['1.png', '1.1.1.png', '1.2.png','1.3.png'],
    place: 'Iconsiam (ชั้น 6)',
    title: 'Van Gogh Alive Bangkok',
    description: ['Van Gogh Alive Bangkok จัดขึ้นในคอนเซ็ปต์ I dream my painting, and then I paint my dream สะท้อน',
    'ความสำคัญของศิลปะที่มีต่อชีวิตของ Van Gogh',
    'พื้นที่จัดแสดงแบ่งเป็น 3 โซนหลักๆ โซนแรก Exhibition Zone มีนิทรรศการแนะนำประวัติของ Van Gogh ต่อด้วย โซนไฮไลต์อย่าง Gallery Hall ที่รวบรวมผลงานมาสเตอร์พีซทั้งภาพเขียน ภาพสเก็ตช์ ภาพพิมพ์ ที่ Van Gogh สร้างสรรค์ขึ้นในช่วงปี 1880-1890 มาจัดแสดงในรูปแบบ Immersive Multi-Sensory Experience โดยจะถูกฉายลงบนพื้นและกำแพงขนาดสูง 6 เมตร โซนที่ 3 เป็น Van Gogh Old Town เมืองเล็กๆ ที่จำลองมาจากผลงาน Van Gogh แบ่งเป็น 4 ธีมคือ Fields, Starry Night, Countryside และ Garden และโซนสุดท้าย ใครอยากแสดงฝีมือก็ยังมีพื้นที่กิจกรรมวาดภาพและมีร้านขายของที่ระลึกให้ซื้อกลับบ้านอีกด้วย'],
    location: 'Iconsiam (ชั้น 6)',
    date: 'ตั้งแต่วันที่ 31 มีนาคม - 31 กรกฎาคม 2566',
    time: '10.00 – 22.00 น.',
    ticket: [
    { type: 'VIP', price: '1,490 บาท' },
    { type: 'ทั่วไป', price: '990 บาท' },
    { type: 'Early Bird', price: '690 บาท (ใช้ได้ถึง 30 เม.ย. 2566) ' },
    { type: 'นักเรียน/นักศึกษา', price: '480 บาท' },
    ],
    waytogo: [
    {type: 'BTS',
    directions: [
    '- BTS สะพานตากสิน',
    ' ลง BTS สะพานตากสิน แล้วออกที่ทางออกประตู 2 หลังจากนั้นสามารถเดินมาขึ้นเรือที่ท่าเรือสาทรเพื่อต่อ Shuttle Boat (ฟรี) เรือออกทุก 10 นาที',
    '- BTS สายสีทอง',
    ' รถ BTS สายสีทองเปิดให้บริการ ตั้งแต่เวลา 06.00-24.00 มี 4 สถานี ได้แก่ สถานีกรุงธนบุรี สถานีเจริญนคร สถานีคลองสาน และสถานีประชาธิปก (ยังไม่เปิดให้บริการ)',
    'สามารถนั่งสถานีใดก็ได้มาลงสถานีเจริญนคร เมื่อลงจากสถานีแล้วจะเจอทางเชื่อมกับไอคอนสยามพอดี',
    'จุดเชื่อม BTS สายสีทองกับสายอื่น ๆ ได้แก่',
    '- BTS สายสีเขียว: BTS สีลม เชื่อมต่อจาก BTS กรุงธนบุรี',
    '- BTS สายสีม่วง: ตั้งแต่เตาปูน - ราษฎร์บูรณะ ต่อกับ BTS ประชาธิปก',
    '- BTS สายสีแดง: ตั้งแต่หัวลำโพง - บางบอน - มหาชัย เชื่อมต่อกับ BTS คลองสาน'
    ]
    },
    {type: 'MRT',
    directions: [
    '- MRT หัวลำโพง',
    'หลังจากลงที่ MRT หัวลำโพง แล้วใช้ทางออกประตูที่ 1 โดยหลังจากที่ออกประตูที่ 1 ให้เลี้ยวซ้ายไปถนนมหาพฤฒาราม เดินเรียบคลองมาเรื่อย ๆ จะเจอสามแยก เลือกเดินตรงไปก็จะเจอสี่แยกไฟแดงสี่พระยา ให้เลี้ยวขวาไปถนนสี่พระยา เดินตรงมาเรื่อย ๆ จะเจอท่าเรือข้ามฟากสี่พระยา ทั้งหมดเป็นระยะทางประมาณ 1.3 กม. แล้วนั่งเรือฟรีไปลงไอคอนสยาม',
    '- MRT สีลม',
    'หลังจากลงที่ MRT สีลมแล้วให้นั่งต่อไปที่ BTS ศาลาแดง แล้วลง BTS สะพานตากสิน แล้วต่อเรือฟรี'
    ]
    },
    {type: 'เรือ',
    directions: [
    'สามารถมาท่าเรือต่อไปนี้เพื่อนั่ง Shuttle boat ไปไอคอนสยามโดยตรง',
    'ท่าเรือสาทร ให้บริการตั้งแต่เวลา 08.00-23.30 น.',
    'ท่าเรือสี่พระยา ให้บริการตั้งแต่เวลา 09.00-23.00 น.',
    '*Shuttle Boat จะออกทุก 10 นาที ตั้งแต่เวลา 09.00-23.00 น.'
    ]
    },
    {type: 'รถประจำทาง',
    directions: [
    'สำหรับการขึ้นรถเมล์ไปไอคอนสยามมีทั้งหมด 11 เส้นทาง ได้แก่ 3, 6, 84, ปอ.84, 88, 89, 105, 111, 120, 149, 167, 177',
    'สาย 3: หมอชิตใหม่ – คลองสาน รถให้บริการทั้งคืน',
    'สาย 6: พระประแดง – บางลำพู เดินรถตั้งแต่ 05:00 - 20:00 น.',
    'สาย 84: อ้อมใหญ่ – สถานีรถไฟฟ้าวงเวียนใหญ่ รถให้บริการทั้งคืน',
    'สาย ปอ.84: วัดไร่ขิง - สถานีรถไฟฟ้าวงเวียนใหญ่',
    'สาย 88: อาคารสงเคราะห์ - ถ.กรุงธนบุรี เดินรถตั้งแต่ 05:00 - 22:00 น. *รถน้อย',
    'สาย 111: วงกลมเจริญนคร – ตลาดพลู เดินรถตั้งแต่ 05:00 - 20:00 น.',
    'สาย 149: อู่พุทธมณฑสาย2 – ส.ขนส่งผู้โดยสารกรุงเทพ(เอกมัย) เดินรถตั้งแต่ 05:00 - 22:00 น.',
    'สาย 167: คลองสาย – ถ.กาญจน์ฯ-บางขุนเทียน เดินรถตั้งแต่ 05:00 - 21:00 น. *รถน้อย',
    'สาย 177: วงกลมบางบัวทอง – วงเวียนใหญ่-อนุเสาวรีย์ชัยสมรภูมิ เดินรถตั้งแต่ 05:00 - 22:00 น. *รถน้อย',
    'สายที่ลงฝั่งตรงข้ามไอคอนสยาม ได้แก่',
    'สาย 89: สวนลุมพินี – ตลิ่งชัน สายนี้จะอ้อมนิดหน่อย เดินรถตั้งแต่ 05:00 - 23:00 น.',
    'สาย 105: มหาชัยเมืองใหม่ - สะพานสมเด็จพระเจ้าตากสิน รถให้บริการทั้งคืน',
    'สาย 120: อู่ทองหลาง – ราชพฤกษ์ รถให้บริการทั้งคืน'
    ]
    }
    ]
    },
  {
    id: 1,
    tag: 'Art',
    images: ['2.png'],
    place: 'Art Place 2',
    title: 'Artwork 2',
    description: 'This is the second art place.',
  },
  // Add more images with their respective tags, places, titles, and descriptions
  // ...
];

const ImageDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isTitleVisible = window.scrollY > 100;
      setTitleVisible(isTitleVisible);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const image = images.find((img) => img.id === Number(id));

  if (!image) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50 text-center bg-white py-4 font-bold text-3xl">
        {titleVisible && image.title}
      </div>
      <div className="flex flex-col justify-center items-center min-h-screen py-12">
        <div className="max-w-3xl p-4 bg-gray-100 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {image.images.map((img, index) => (
              <div key={index}>
                <Image
                  src={`/images/${img}`}
                  alt={image.title}
                  width={500}
                  height={300}
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            ))}
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-semibold mb-2">{image.title}</h1>
            <h1 className="text-xl font-semibold">About</h1>
            <p className="text-gray-600 mb-6 mt-2">{image.description}</p>
            <div className="text-gray-800">
              <p>
                <span className="font-bold">Location:</span> {image.place}
              </p>
              <p className='mt-6'>
                <span className="font-bold">Way to Go</span>
              </p>
              {image.waytogo.map((way, index) => (
                <div key={index}>
                  <p className="font-bold mt-2">{way.type}</p>
                  {way.directions.map((direction, index) => (
                    <p key={index}>{direction}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-gray-200 py-2 px-4 text-gray-800 text-sm">
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          <div>
            <p className="font-bold">Location:</p>
            <p>{image.location}</p>
          </div>
          <div>
            <p className="font-bold">Date:</p>
            <p>{image.date}</p>
          </div>
          <div>
            <p className="font-bold">Time:</p>
            <p>{image.time}</p>
          </div>
          <div>
            <p className="font-bold">Ticket:</p>
            <ul className="list-disc list-inside mt-1">
              {image.ticket.map((ticket, index) => (
                <li key={index}>
                  {ticket.type}: {ticket.price}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ImageDetailPage;