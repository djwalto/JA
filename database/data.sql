INSERT INTO "account_type"
    ("title")
VALUES
    ('administrator'),
    ('volunteer');

INSERT INTO "users"
    ("username", "first_name", "last_name", "password", "account_type_id", "email", "telephone")
VALUES
    ('jsmith', 'Jane', 'Smith', '1234', 2, 'janesmith@gmail.com', '913-555-5551'),
    ('adamM', 'Adam', 'Martin', '1234', 2, 'johndoe@gmail.com', '555-666-5651'),
    ('bekahN', 'Bekah', 'Nord', '1234', 2, 'bekah@gmail.com', '310-666-5651'),
    ('dnaPolo', 'Dana', 'Pollock', '1234', 2, 'dana@gmail.com', '616-686-5651');

INSERT INTO "schools"
    ("name", "address", "city", "state", "zip")
VALUES
    ('Truman High School', '3301 South Noland Road', 'Independence', 'Missouri', 64055),
    ('North Kansas City High School', '620 East 23rd Ave', 'North Kansas City', 'Missouri', 64116),
    ('Winnetonka High School', '5815 NE 48th Street', 'Kansas City', 'Missouri', 64119),
    ('Oak Park High School', '825 NE 79th Terrace', 'Kansas City', 'Missouri', 64118);

INSERT INTO "programs"
    ("title", "image", "sessions", "description")
VALUES
    ('JA BizTown', 'https://greaterkansascity.ja.org/dA/295083c3fc/coverArt/JA%20Biztown.jpeg/259h', 14, 'JA BizTown combines in-class learning with a day-long visit to a simulated town. This popular program allows elementary school students to operate banks, manage restaurants, write checks, and vote for mayor. The program helps students connect the dots between what they learn in school and the real world. (Grades 4-6)'),
    ('JA Business Communications', 'https://greaterkansascity.ja.org/dA/af6b706525/coverArt/JA%20Business%20Communications%20copy.jpg/259h', 16, 'JA Business Communications is a one-semester teacher-led course that equips high school students to focus on communication skills necessary to succeed in business. (Grades 9-12)'),
    ('JA Career Exploration Fair', 'https://greaterkansascity.ja.org/dA/cca60d57aa/coverArt/JA%20Career%20Exploration%20Fair.jpg/259h', 3, 'JA Career Exploration Fair is an event where students learn about a range of career options across multiple career clusters. (Grades K-12)'),
    ('JA Career Speakers Series', 'https://greaterkansascity.ja.org/dA/7ae3662f30/coverArt/JA%20Career%20Speakers%20Series.jpg/259h', 4, 'In JA Career Speakers Series, a volunteer guest speaker visits the classroom and shares information about his or her career, work, and education experience. (Grades K-12)'),
    ('JA Career Success', 'https://greaterkansascity.ja.org/dA/fc115dd230/coverArt/JA%20Career%20Success.jpeg/259h', 7, 'JA Career Success equips students with the knowledge required to get and keep a job in high-growth industries. Students will explore the crucial workplace skills employers seek but often find lacking in young employees. Students also will learn about valuable tools to find that perfect job, including resumes, cover letters, and interviewing techniques. (Grades 9-12)'),
    ('JA Economics Blended Model', 'https://greaterkansascity.ja.org/dA/6ddc2a27b7/coverArt/cover%20art.jpeg/259h', 16, 'JA Economics Blended is a one-semester course that connects high school students to the economic principles that influence their daily lives as well as their futures. (Grades 11-12)'),
    ('JA Economics for Success', 'https://greaterkansascity.ja.org/dA/16bd6a903a/coverArt/JA%20Economics%20for%20Success.jpeg/200w', 6, 'JA Economics for Success gives students the information needed to build strong personal finances, a cornerstone to a happy, secure life. Students learn the importance of exploring career options based on their skills, interests, and values. They also learn about spending money within a budget; saving and investing wisely; and using credit cautiously. (Grades 6-8)'),
    ('JA Entrepreneurial Mindset', 'https://greaterkansascity.ja.org/dA/6d205e3f9d/coverArt/coverart.png/200w', 17, 'JA Entrepreneurial Mindset is a one-semester teacher-led course that introduces high school students to the basics of starting a business. (Grades 9-12)'),
    ('JA Excellence through Ethics', 'https://greaterkansascity.ja.org/dA/1be5280476/coverArt/ExcellenceThroughEthics.png/200w', 3, 'Through JA Excellence through Ethics, students will learn the importance of ethics and ethical decision-making and how ethical and unethical choices affect everyone in a community. (Grades 6-12)'),
    ('JA Finance Park', 'https://greaterkansascity.ja.org/dA/baf25c4825/coverArt/JA%20Finance%20Park.jpeg/200w', 12, 'JA Finance Park is Junior Achievement’s capstone program for personal financial planning and career exploration. At the culmination of this teacher-led program, students visit JA Finance Park, a realistic on-site or virtual community, to put into practice what they have learned by developing and committing to a personal budget. (Grades 7-12)'),
    ('JA Financial Capability 1', 'https://greaterkansascity.ja.org/dA/601fa43c29/coverArt/coverart.png/200w', 17, 'JA Financial Capability 1 is a one-semester teacher-led course in which high school students examine financial capabilities from a business perspective, focusing on banking, economics, business planning, and risk management. (Grades 9-12)'),
    ('JA Financial Capability 2', 'https://greaterkansascity.ja.org/dA/26b000afc9/coverArt/coverart.png/200w', 17, 'JA Financial Capability 2 is a one-semester teacher-led course in which high school students examine financial capabilities from a business perspective, focusing on employee benefits, ethics, business investment, and international business operations. (Grades 9-12)'),
    ('JA Financial Literacy', 'https://greaterkansascity.ja.org/dA/c4f9dfcd79/coverArt/coverart.png/200w', 17, 'JA Financial Literacy is a one-semester teacher-led course that equips high school students with foundational personal finance skills.(Grades 9-12)'),
    ('JA Global Marketplace', 'https://greaterkansascity.ja.org/dA/1476fc12a0/coverArt/JA%20Global%20Marketplace%20Blended%20Model.jpeg/200w', 7, 'JA Global Marketplace Blended Model introduces students to the global marketplace and the ways in which countries buy and sell from each other. Through completion of this program, students will gain an understanding of producers and consumers in the interconnected global market. (Grades 6-8)'),
    ('JA Introduction to Business and Technology 1', 'https://greaterkansascity.ja.org/dA/40f6ee8511/coverArt/coverart.png/200w', 17, 'JA Introduction to Business and Technology 1 is a one-semester teacher-led course that introduces high school students to the basic skills necessary to succeed in business. Themes include teamwork, innovation, decision making, and ethics. (Grades 9-12)'),
    ('JA Introduction to Business and Technology 2', 'https://greaterkansascity.ja.org/dA/1b7092e33c/coverArt/coverart.png/200w', 17, 'JA Introduction to Business and Technology 2 is a one-semester teacher-led course that introduces high school students to the basic skills necessary to succeed in business. Themes include personal skills like innovation, management functions, and accounting. (Grades 9-12)'),
    ('JA It"s My Business!', 'https://greaterkansascity.ja.org/dA/140a9bc323/coverArt/JA%20Its%20My%20Business%20Blended%20Model.png/200w', 6, 'Through engaging activities, JA It"s My Business! Blended Model provides middle school students an opportunity to experience the initial steps necessary to start a business. New program content provides an authentic entrepreneurial experience for students, with each session building up to a product-pitch competition. (Grades 6-8)'),
    ('JA It"s My Future', 'https://greaterkansascity.ja.org/dA/5424c3ccec/coverArt/JA%20It%20s%20My%20Future%20Blended%20Model.png/200w', 6, 'JA It"s My Future Blended Model offers middle school students practical information to help prepare them for the working world. Students will develop the personal-branding and job-hunting skills needed to earn a job. (Grades 6-8)'),
    ('JA It"s My Job (Soft Skills)', 'https://greaterkansascity.ja.org/dA/d3329dcbf7/coverArt/coverart.png/200w', 7, 'JA It"s My Job (Soft Skills) will help students understand the value of professional communication and soft skills, making them more employable to future employers across multiple career clusters. (Grades 6-12)'),
    ('JA Job Shadow', 'https://greaterkansascity.ja.org/dA/a2410e5733/coverArt/JA%20Job%20Shadow.jpeg/200w', 3, 'JA Job Shadow prepares students to be entrepreneurial thinkers in their approach to work. In-class sessions prepare students for a visit to a professional work environment, where they will face a series of challenges administered by their workplace hosts. Students learn how to research career opportunities and the skills needed to land and keep their dream job.'),
    ('JA Marketing Principles 1', 'https://greaterkansascity.ja.org/dA/274a41048e/coverArt/coverart.png/200w', 17, 'JA Marketing Principles 1 is a one-semester teacher-led course that introduces high school students to marketing and some basic marketing techniques. (Grades 9-12)'),
    ('JA Marketing Principles 2', 'https://greaterkansascity.ja.org/dA/20ab5bd26d/coverArt/coverart.png/200w', 17, 'In JA Marketing Principles 2, a one-semester teacher-led course, high school students learn about marketing in the world around them and potential careers in the field. (Grades 9-12)'),
    ('JA More than Money', 'https://greaterkansascity.ja.org/dA/6c633264d6/coverArt/JA%20More%20Than%20Money.png/200w', 5, 'JA More than Money introduces students to financial literacy and entrepreneurship, and to social studies learning objectives that include money-management skills, goods and services, and global markets. Through hands-on activities and a JA cast of characters serving as symbols for financial literacy and entrepreneurship concepts, students will learn a practical approach to starting a business and making smart decisions about managing money. (Grades 3-5)'),
    ('JA Our City', 'https://greaterkansascity.ja.org/dA/0e780db329/coverArt/jaourcity-cover.png/200w', 5, 'JA Our City featuring Cha-Ching introduces students to financial literacy and learning objectives for third–grade social studies, including how people manage their money and the importance of economic exchange within a city.'),
    ('JA Our Community', 'https://greaterkansascity.ja.org/dA/e35558fe2e/coverArt/JA%20Our%20Community.jpeg/200w', 5, 'JA Our Community uses posters and games to offer practical information about businesses and the many jobs those businesses offer in a community. Students explore production methods through a simulation game, and they learn about taxes, decision making, and how money flows in an economy. (Grade 2)'),
    ('JA Our Families', 'https://greaterkansascity.ja.org/dA/e580b13ce1/coverArt/JA%20Our%20Families.png/200w', 5, 'JA Our Families explains how family members" jobs and businesses contribute to the well-being of the family and of the community. The program introduces the concept of needs and wants and explores the ways families plan for and acquire goods and services. Students analyze their own skills to determine ways they can support their families. (Grade 1)'),
    ('JA Our Nation', 'https://greaterkansascity.ja.org/dA/1768edaaac/coverArt/JA%20Our%20Nation.jpeg/200w', 6, 'JA Our Nation provides practical information about the need for employees who can meet the demands of the 21st century job market, particularly high-growth, high-demand jobs. By program"s end, students will understand the skills, especially in science, technology, engineering, and math, that will make their futures brighter. (Grade 5)'),
    ('JA Our Region', 'https://greaterkansascity.ja.org/dA/ba9ec2e673/coverArt/JA%20Our%20Region.jpeg/200w', 5, 'JA Our Region introduces students to entrepreneurship and how entrepreneurs use resources to produce goods and services in a region. Students operate a hypothetical hot dog stand to understand the fundamental tasks performed by a business owner and to track the revenue and expenses of a business. (Grade 4)'),
    ('JA Ourselves', 'https://greaterkansascity.ja.org/dA/773b9c6571/coverArt/JA%20Ourselves.jpeg/200w', 5, 'JA Ourselves uses storybook characters in read-aloud and hands-on activities to introduce the role people play in an economy. Through engaging, volunteer-led activities, young students learn about individual choices, money, the importance of saving and giving, and the value of work. (Kindergarten)'),
    ('JA Personal Finance Blended Model', 'https://greaterkansascity.ja.org/dA/916be6c93d/coverArt/JA%20Personal%20Finance%20Blended%20Model.jpeg/200w', 7, 'JA Personal Finance Blended Model allows students to experience the interrelationship between today’s financial decisions and future financial freedom. To achieve financial health and wellness, they learn about money-management strategies, including earning, employment and income, budgeting, savings, credit and debt, consumer protection, smart shopping, risk management, and investing. (Grades 9-12)');


INSERT INTO "learning_material"
    ("program_id", "title", "content")
VALUES

    (1, 'JA Biztown Program Brief', 'https://jausa.ja.org/dA/598cf31835/file/JA%20BizTown%20Program%20Brief.pdf'),
    (1, 'JA Biztown Program Overview', 'https://jausa.ja.org/dA/0f7568aa27/file/JA%20BizTown%20Program%20Overview.pdf'),
    (5, 'JA Career Success Program Brief', 'https://jausa.ja.org/dA/934b62a195/file/JA%20Career%20Success%20Program%20Brief.pdf'),
    (5, 'JA Career Success Program Overview', 'https://jausa.ja.org/dA/ae66cd4e82/file/JA%20Career%20Success%20Program%20Overview.pdf'),

    (6, 'JA Economics Blended Model', 'https://jausa.ja.org/dA/a5f5d91e81/file/JA%20Economics%20Course%20Overview%20and%20Outline.pdf'),
    (7, 'JA Economics for Success', 'https://greaterkansascity.ja.org/dA/468f63ae96/file/JA%20Economics%20for%20Success%20Program%20Brief.pdf'),
    (8, 'A Entrepreneurial Mindset', 'https://greaterkansascity.ja.org/dA/3e7dc6f73b/file/JA%20High%20School%20Experience%20JA%20Entrepreneurial%20Mindset%20Course%20Overview%20and%20Outline.pdf'),
    (9, 'JA Excellence through Ethics Program Brief', 'https://greaterkansascity.ja.org/dA/0906126bd9/file/JA%20Excellence%20through%20Ethics%20Program%20Brief.pdf'),
    (9, 'JA Excellence through Ethics Program Overview', 'https://greaterkansascity.ja.org/dA/71f21af266/file/JA%20Excellence%20through%20Ethics%20Program%20Overview.pdf'),
    (10, 'JA Finance Park Virtual Program Brief', 'https://greaterkansascity.ja.org/dA/295ce6051a/file/JA_Finance_Park_Virtual_2020_Program_Brief.pdf'),
    (10, 'JA Finance Park Virtual Program Overview', 'https://greaterkansascity.ja.org/dA/9d3c33a500/file/JA_Finance_Park_Virtual_2020_Program_Overview.pdf'),
    (10, 'JA Finance Park Advanced Program Overview', 'https://greaterkansascity.ja.org/dA/bfaab43bfd/file/JA_Finance_Park_Advanced_2020_Program_Overview.pdf'),
    (10, 'JA Finance Park Advanced Program Brief', 'https://greaterkansascity.ja.org/dA/8172686433/file/JA_Finance_Park_Advanced_2020_Program_Brief.pdf'),
    (10, 'JA Finance Park Entry Level Program Brief', 'https://greaterkansascity.ja.org/dA/f9cf6886d8/file/JA%20Finance%20Park%20Program%20Brief.pdf'),
    (10, 'JA Finance Park Entry Level Program Overview', 'https://greaterkansascity.ja.org/dA/baa09c55bc/file/JA%20Finance%20Park%20Program%20Overview.pdf'),
    (11, 'Ja Financial Capability 1 Course Overview and Outline', 'https://greaterkansascity.ja.org/dA/5034e825dc/file/JA%20High%20School%20Experience%20JA%20Financial%20Capability%201%20Course%20Overview%20and%20Outline.pdf'),
    (12, 'Ja Financial Capability 2 Course Overview and Outline', 'https://greaterkansascity.ja.org/dA/0ecb4adcec/file/JA%20High%20School%20Experience%20JA%20Financial%20Capability%202%20Course%20Overview%20and%20Outline.pdf'),
    (13, 'JA Financial Literacy Course Overview and Outline', 'https://greaterkansascity.ja.org/dA/59ad5bdc9d/file/JA%20High%20School%20Experience%20JA%20Financial%20Literacy%20Course%20Overview%20and%20Outline.pdf'),
    (14, 'JA Global Marketplace Blended Program Brief', 'https://greaterkansascity.ja.org/dA/dad94b93d6/file/JA%20Global%20Marketplace%20Blended%20Program%20Brief.pdf'),
    (14, 'JA Global Marketplace Blended Program Overview', 'https://greaterkansascity.ja.org/dA/b4ec30c077/file/JA%20Global%20Marketplace%20Blended%20Program%20Overview.pdf'),
    (15, 'JA Introduction to Business and Technology 1 Course Overview and Outline', 'https://greaterkansascity.ja.org/dA/c94fba770e/file/JA%20High%20School%20Experience%20JA%20Introduction%20to%20Business%20and%20Technology%201%20Course%20Overview%20and%20Outline.pdf'),
    (16, 'JA Introduction to Business and Technology 2 Course Overview and Outline', 'https://greaterkansascity.ja.org/dA/ba8299b30a/file/JA%20High%20School%20Experience%20JA%20Introduction%20to%20Business%20and%20Technology%202%20Course%20Overview%20and%20Outline.pdf'),
    (17, 'Program Brief', 'https://greaterkansascity.ja.org/dA/b97c1c0965/file/JA%20It%20s%20My%20Business!%20Blended%20Program%20Brief.pdf'),
    (17, 'Program Overview', 'https://greaterkansascity.ja.org/dA/4b569a32bb/file/JA%20It%20s%20My%20Business!%20Blended%20Program%20Overview.pdf'),
    (18, 'Program Brief', 'https://greaterkansascity.ja.org/dA/04c23a9641/file/JA%20It%20s%20My%20Future%20Blended%20Program%20Brief.pdf'),
    (18, 'Program Overview', 'https://greaterkansascity.ja.org/dA/7ea9812092/file/JA%20It%20s%20My%20Future%20Blended%20Program%20Overview.pdf'),
    (19, 'Program Brief', 'https://greaterkansascity.ja.org/dA/66ad3255a8/file/JA%20It%20s%20My%20Job%20(Soft%20Skills)%20Program%20Brief.pdf'),
    (20, 'JA Job Shadow Program Brief', 'https://greaterkansascity.ja.org/dA/3c4168dcd6/file/JA%20Job%20Shadow%20Program%20Brief.pdf'),
    (20, 'JA Job Shadow Program Overview', 'https://greaterkansascity.ja.org/dA/aa138ca3a9/file/JA%20Job%20Shadow%20Program%20Overview.pdf'),
    (21, 'JA Marketing Principles 1 Overview and Outline', 'https://greaterkansascity.ja.org/dA/9eb0d29402/file/JA%20High%20School%20Experience%20JA%20Marketing%20Principles%201%20Course%20Overview%20and%20Outline.pdf'),
    (22, 'JA Marketing Principles 2 Overview and Outline', 'https://greaterkansascity.ja.org/dA/1c7a90e989/file/JA%20High%20School%20Experience%20JA%20Marketing%20Principles%202%20Course%20Overview%20and%20Outline.pdf'),
    (23, 'JA More than Money Program Brief', 'https://greaterkansascity.ja.org/dA/9673ce095d/file/JA%20More%20than%20Money%20Program%20Brief.pdf'),
    (23, 'JA More than Money Program Overview', 'https://greaterkansascity.ja.org/dA/86543e0f85/file/JA%20More%20Than%20Money%20Program%20Overview.pdf'),
    (24, 'Ja Our City Program Brief', 'https://greaterkansascity.ja.org/dA/34ec85d054/file/JA%20Our%20City%20Program%20Brief.pdf'),
    (24, 'Ja Our City Program Overview', 'https://greaterkansascity.ja.org/dA/55e0d00347/file/JA%20Our%20City%20Program%20Overview.pdf'),
    (25, 'JA Our Community Program Brief', 'https://greaterkansascity.ja.org/dA/cfe531d250/file/JA%20Our%20Community%20Program%20Brief.pdf'),
    (25, 'JA Our Community Program Overview', 'https://greaterkansascity.ja.org/dA/027256d7b8/file/JA%20Our%20Community%20Program%20Overview.pdf'),
    (26, 'JA Our Families Program Brief', 'https://greaterkansascity.ja.org/dA/7e4e8e8a56/file/JA%20Our%20Families%20Program%20Brief.pdf'),
    (26, 'JA Our Families Program Overview', 'https://greaterkansascity.ja.org/dA/6591692ccf/file/JA%20Our%20Families%20Program%20Overview.pdf'),
    (27, 'JA Our Nation Program Brief', 'https://greaterkansascity.ja.org/dA/05b504081c/file/JA%20Our%20Nation%20Program%20Brief.pdf'),
    (27, 'JA Our Nation Program Overview', 'https://greaterkansascity.ja.org/dA/1318ee6c09/file/JA%20Our%20Nation%20Program%20Overview.pdf'),
    (27, 'JA Our Nation Training Videos', 'https://greaterkansascity.ja.org/volunteer-resource/ja-our-nation-training-videos'),
    (28, 'JA Our Region Program Brief', 'https://greaterkansascity.ja.org/dA/e9b7c8f6eb/file/JA%20Our%20Region%20Program%20Brief.pdf'),
    (28, 'JA Our Region Program Overview', 'https://greaterkansascity.ja.org/dA/93f63fdea0/file/JA%20Our%20Region%20Program%20Overview.pdf'),
    (29, 'JA Ourselves Program Brief', 'https://greaterkansascity.ja.org/dA/caace71476/file/JA%20Ourselves%20Program%20Brief.pdf'),
    (29, 'JA Ourselves Program Overview', 'https://greaterkansascity.ja.org/dA/5940570761/file/JA%20Ourselves%20Program%20Overview.pdf'),
    (30, 'JA Personal Finance Blended Program Brief', 'https://greaterkansascity.ja.org/dA/9f626310ef/file/JA%20Personal%20Finance%20Blended%20Program%20Brief.pdf'),
    (30, 'JA Personal Finance Blended Program Overview', 'https://greaterkansascity.ja.org/dA/15be71a143/file/JA%20Personal%20Finance%20Blended%20Program%20Overview.pdf');


INSERT INTO "scheduled_classes"
    ("user_id", "program_id", "school_id")
VALUES
    (1, 2, 3),
    (2, 3, 4),
    (3, 2, 3),
    (4, 2, 2);


