const jsonData = [
    {
        "brand": "tesla",
        "brandImg": "./image/logo/tesla.svg",
        "brandimgID": "1",
        "icon": "./image/icon/new_tesla.svg",
        "bgCode": "#e82127",
        "models": [{
            "name": "Tesla Model Y (Standard)",
            "img": "./image/car/teslay.png",
            "top_speed": 217,
            "speed_img": "./image/200.svg",
            "ีunit": "KM/H",
            "range_km": "455",
            "range_standard_verify": "WLTP",
            "zero_hundred": "6.9",
            "start_price": "1,699,000",
            "youtube_link": "https://www.youtube.com/embed/Tb_Wn6K0uVs",
            "links": "https://www.tesla.com/th_th/modely",
            "color_car": [
                {
                    "colorName": "Black",
                    "colorCode": "#000",
                    "colorImage": "./image/car_color/teslay_black.png"
                },
                {
                    "colorName": "White",
                    "colorCode": "#fff",
                    "colorImage": "./image/car_color/teslay_white.png"
                },
                {
                    "colorName": "Gray",
                    "colorCode": "#444445",
                    "colorImage": "./image/car_color/teslay_gray.png"
                },
                {
                    "colorName": "Blue",
                    "colorCode": "#184fcc",
                    "colorImage": "./image/car_color/teslay_blue.png"
                },
                {
                    "colorName": "Red",
                    "colorCode": "#fc0303",
                    "colorImage": "./image/car_color/teslay_red.png"
                }
            ],
            "car_other": false,
            "color_interior": [
                {
                    "colorName": "Black",
                    "colorCode": "#000",
                    "colorImage": "./image/interior/teslay_black.png"
                },
                {
                    "colorName": "White",
                    "colorCode": "#fff",
                    "colorImage": "./image/interior/teslay_white.png"
                }
            ],
            "interior_other": false,
            "detail": `
            <div class="mb-3">
                <h2 style="font-weight:bold;">รายละเอียดรถยนต์</h2>
                <ul>
                    <li>รุ่น: Tesla Model Y Standard</li>
                    <li>ปีที่เปิดตัว: 2020</li>
                    <li>การขับเคลื่อน: ไฟฟ้า (Electric)</li>
                </ul>
            </div>

            <div class="mb-3">
                <h2 style="font-weight:bold;">คุณสมบัติสำคัญ</h2>
                <ul>
                    <li>ความเร็วสูงสุด: ประมาณ 217 กิโลเมตร / ต่อชั่วโมง</li>
                    <li>เร่งจาก 0 ถึง 100 กิโลเมตรต่อชั่วโมงในเวลาประมาณ 6.9 วินาที</li>
                    <li>ระยะทางที่ขับได้: 455 กิโลเมตร (WLTP)</li>
                </ul>
            </div>

            <div class="mb-3">
                <h2 style="font-weight:bold;">ราคา</h2>
                <p>ราคาเริ่มต้น: 1,699,000 THB.</p>
            </div>

            <div class="mb-3">
                <h2 style="font-weight:bold;">ฟีเจอร์สำคัญ</h2>
                <ul>
                    <li>ระบบ Autopilot ที่รองรับการขับรถอัตโนมัติ</li>
                    <li>ห้องโดยสารสำหรับ 5 ที่นั่ง</li>
                    <li>หน้าจอสมาร์ทแสดงข้อมูลแบบแทร็ก</li>
                    <li>การอัปเดตซอฟต์แวร์ระยะไกล</li>
                </ul>
            </div>`
           
        }]
    },
    {
        "brand": "porsche",
        "brandImg": "./image/logo/porsche.svg",
        "brandimgID": "2",
        "icon": "./image/icon/porsche.png",
        "bgCode": "#fff",
        "models": [{
            "name": "Porsche Taycan RWD",
            "img": "./image/car/taycan.png",
            "top_speed": 230,
            "speed_img": "./image/200.svg",
            "ีunit": "KM/H",
            "range_km": "371 - 443",
            "range_standard_verify": "WLTP",
            "zero_hundred": "5.4",
            "start_price": "6,450,000",
            "youtube_link": "https://www.youtube.com/embed/qfXsEfLVPTE",
            "links": "https://www.porsche.com/pap/_thailand_/models/taycan/taycan-models",
            "color_car": [
                {
                    "colorName": "Black",
                    "colorCode": "#000",
                    "colorImage": "./image/car_color/taycan_black.png"
                },
                {
                    "colorName": "White",
                    "colorCode": "#fff",
                    "colorImage": "./image/car_color/taycan_white.png"
                },
                {
                    "colorName": "Blue",
                    "colorCode": "#7ba7bc",
                    "colorImage": "./image/car_color/taycan_blue.png"
                },
                {
                    "colorName": "Pink",
                    "colorCode": "#8B7A82",
                    "colorImage": "./image/car_color/taycan_pink.png"
                },
                {
                    "colorName": "Coffe",
                    "colorCode": "#D1C8BF",
                    "colorImage": "./image/car_color/taycan_coffe.png"
                }
            ],
            "car_other": true,
            "color_interior": [
                {
                    "colorName": "Black",
                    "colorCode": "#000",
                    "colorImage": "./image/interior/taycan_black.jpeg"
                },
                {
                    "colorName": "Beige",
                    "colorCode": "#9D968E",
                    "colorImage": "./image/interior/taycan_beige.jpeg"
                },
                {
                    "colorName": "Grey",
                    "colorCode": "#485257",
                    "colorImage": "./image/interior/taycan_grey.jpeg"
                },
                {
                    "colorName": "Red",
                    "colorCode": "#782f2f",
                    "colorImage": "./image/interior/taycan_red.jpeg"
                }
            ],
            "interior_other": true,
            "detail": `
            <div class="mb-3">
                <h2 style="font-weight:bold;">รายละเอียดรถยนต์</h2>
                <ul>
                    <li>รุ่น: Porsche Taycan RWD</li>
                    <li>ปีที่เปิดตัว: 2021</li>
                    <li>การขับเคลื่อน: ไฟฟ้า (Electric)</li>
                </ul>
            </div>

            <div class="mb-3">
                <h2 style="font-weight:bold;">คุณสมบัติสำคัญ</h2>
                <ul>
                    <li>ความเร็วสูงสุด: ประมาณ 230 กิโลเมตร / ต่อชั่วโมง</li>
                    <li>เร่งจาก 0 ถึง 100 กิโลเมตรต่อชั่วโมงในเวลาประมาณ 5.4 วินาที</li>
                    <li>ระยะทางที่ขับได้: 371 - 443 กิโลเมตร (WLTP)</li>
                </ul>
            </div>

            <div class="mb-3">
                <h2 style="font-weight:bold;">ราคา</h2>
                <p>ราคาเริ่มต้น: 6,450,000 THB.</p>
            </div>

            <div class="mb-3">
                <h2 style="font-weight:bold;">ฟีเจอร์สำคัญ</h2>
                <ul>
                    <li>การปรับแต่งที่หลากหลาย</li>
                    <li>ห้องโดยสารสำหรับ 4 ที่นั่ง</li>
                    <li>หน้าจอสมาร์ทแสดงข้อมูลแบบแทร็ก</li>
                    <li>การอัปเดตซอฟต์แวร์ระยะไกล</li>
                </ul>
            </div>`
           
        }]
    },
    {
        "brand": "volvo",
        "brandImg": "./image/logo/volvo.png",
        "brandimgID": "1",
        "icon": "./image/icon/volvo.png",
        "bgCode": "#000",
        "models": [{
            "name": "Volvo XC40",
            "img": "./image/car/volvo_xc40.png",
            "top_speed": 175,
            "speed_img": "./image/165.svg",
            "ีunit": "KM/H",
            "range_km": "420",
            "range_standard_verify": "WLTP",
            "zero_hundred": "7.3",
            "start_price": "1,990,000",
            "youtube_link": "https://www.youtube.com/embed/ZR7pyiMAm5Y",
            "links": "https://www.volvocars.com/th-th/build/xc40-electric?",
            "color_car": [
                {
                    "colorName": "Black",
                    "colorCode": "#000",
                    "colorImage": "./image/car_color/xc40_black.png"
                },
                {
                    "colorName": "White",
                    "colorCode": "#fff",
                    "colorImage": "./image/car_color/xc40_white.png"
                },
                {
                    "colorName": "Grey",
                    "colorCode": "#959b9c",
                    "colorImage": "./image/car_color/xc40_grey.png"
                },
                {
                    "colorName": "Blue",
                    "colorCode": "#ceeff0",
                    "colorImage": "./image/car_color/xc40_blue.png"
                },
                {
                    "colorName": "Bright",
                    "colorCode": "#f5f1e1",
                    "colorImage": "./image/car_color/xc40_bright.png"
                },
                {
                    "colorName": "Green",
                    "colorCode": "#829984",
                    "colorImage": "./image/car_color/xc40_green.png"
                }
            ],
            "car_other": true,
            "color_interior": [
                {
                    "colorName": "Black",
                    "colorCode": "#000",
                    "colorImage": "./image/interior/xc40_black.jpeg"
                }
            ],
            "interior_other": true,
            "detail": `
            <div class="mb-3">
                <h2 style="font-weight:bold;">รายละเอียดรถยนต์</h2>
                <ul>
                    <li>รุ่น: Volvo XC40</li>
                    <li>ปีที่เปิดตัว: 2022</li>
                    <li>การขับเคลื่อน: ไฟฟ้า (Electric)</li>
                </ul>
            </div>

            <div class="mb-3">
                <h2 style="font-weight:bold;">คุณสมบัติสำคัญ</h2>
                <ul>
                    <li>ความเร็วสูงสุด: ประมาณ 175 กิโลเมตร / ต่อชั่วโมง</li>
                    <li>เร่งจาก 0 ถึง 100 กิโลเมตรต่อชั่วโมงในเวลาประมาณ 7.3 วินาที</li>
                    <li>ระยะทางที่ขับได้: 420 กิโลเมตร (WLTP)</li>
                </ul>
            </div>

            <div class="mb-3">
                <h2 style="font-weight:bold;">ราคา</h2>
                <p>ราคาเริ่มต้น: 1,990,000 THB.</p>
            </div>

            <div class="mb-3">
                <h2 style="font-weight:bold;">ฟีเจอร์สำคัญ</h2>
                <ul>
                    <li>SUV ยกสูง</li>
                    <li>ห้องโดยสารสำหรับ 5 ที่นั่ง</li>
                    <li>หน้าจอสมาร์ทแสดงข้อมูลแบบแทร็ก</li>
                    <li>พื้นที่เก็บข้อง 419 ล.</li>
                </ul>
            </div>`
           
        }]
    },
    {
        "brand": "neta",
        "brandImg": "./image/logo/neta.svg",
        "brandimgID": "2",
        "icon": "./image/icon/neta.png",
        "bgCode": "#728bc6",
        "models": [{
            "name": "Neta V",
            "img": "./image/car/netav.png",
            "top_speed": 125,
            "speed_img": "./image/125.svg",
            "ีunit": "KM/H",
            "range_km": "300",
            "range_standard_verify": "WLTP",
            "zero_hundred": "12.2",
            "start_price": "549,000",
            "youtube_link": "https://www.youtube.com/embed/Ca2a8HenaOg",
            "links": "https://www.neta.co.th/th/product/NetaV",
            "color_car": [
                {
                    "colorName": "White",
                    "colorCode": "#9c9ba0",
                    "colorImage": "./image/car_color/netav_light.png"
                },
                {
                    "colorName": "Cyan",
                    "colorCode": "#6698a1",
                    "colorImage": "./image/car_color/netav_cyan.png"
                },
                {
                    "colorName": "Grey",
                    "colorCode": "#515257",
                    "colorImage": "./image/car_color/netav_grey.png"
                },
                {
                    "colorName": "Blue",
                    "colorCode": "#647ba5",
                    "colorImage": "./image/car_color/netav_blue.png"
                },
                {
                    "colorName": "Pink",
                    "colorCode": "#c29aa2",
                    "colorImage": "./image/car_color/netav_pink.png"
                },
                {
                    "colorName": "Green",
                    "colorCode": "#85a4a1",
                    "colorImage": "./image/car_color/netav_green.png"
                }
            ],
            "car_other": false,
            "color_interior": [
                {
                    "colorName": "Black",
                    "colorCode": "#000",
                    "colorImage": "./image/interior/netav_black.jpeg"
                }
            ],
            "interior_other": false,
            "detail": `
            <div class="mb-3">
                <h2 style="font-weight:bold;">รายละเอียดรถยนต์</h2>
                <ul>
                    <li>รุ่น: Neta V</li>
                    <li>ปีที่เปิดตัว: 2022</li>
                    <li>การขับเคลื่อน: ไฟฟ้า (Electric)</li>
                </ul>
            </div>

            <div class="mb-3">
                <h2 style="font-weight:bold;">คุณสมบัติสำคัญ</h2>
                <ul>
                    <li>ความเร็วสูงสุด: ประมาณ 125 กิโลเมตร / ต่อชั่วโมง</li>
                    <li>เร่งจาก 0 ถึง 100 กิโลเมตรต่อชั่วโมงในเวลาประมาณ 12.2 วินาที</li>
                    <li>ระยะทางที่ขับได้: 300 กิโลเมตร (WLTP)</li>
                </ul>
            </div>

            <div class="mb-3">
                <h2 style="font-weight:bold;">ราคา</h2>
                <p>ราคาเริ่มต้น: 549,000 THB.</p>
            </div>

            <div class="mb-3">
                <h2 style="font-weight:bold;">ฟีเจอร์สำคัญ</h2>
                <ul>
                    <li>SUV ยกสูง</li>
                    <li>ห้องโดยสารสำหรับ 5 ที่นั่ง</li>
                    <li>พื้นที่เก็บข้อง 500 ล.</li>
                </ul>
            </div>`
           
        }]
    }
]