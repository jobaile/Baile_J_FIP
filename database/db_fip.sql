-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Mar 23, 2019 at 01:23 AM
-- Server version: 5.7.23
-- PHP Version: 7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `db_fip`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_file`
--

CREATE TABLE `tbl_file` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(20) NOT NULL,
  `image` varchar(250) NOT NULL,
  `video` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_file`
--

INSERT INTO `tbl_file` (`id`, `name`, `image`, `video`) VALUES
(1, 'Edit1', '27797843_2055898667955346_6605420275109509640_o.jpg', ''),
(2, 'Trial', '40694623_2160988113934012_5373070831087779840_n.jpg', ''),
(3, 'test', 'adventure-conifer-daylight-302271.jpg', ''),
(4, 'one more!', 'abstract-art-artistic-1103970.jpg', ''),
(5, 'testing', '47158214_796426577372683_2483952103228178432_n.jpg', ''),
(6, 'testing', '40694623_2160988113934012_5373070831087779840_n.jpg', ''),
(7, 'hello', '40694623_2160988113934012_5373070831087779840_n.jpg', ''),
(8, 'pictre', '46488561_2262790200420469_8384253586061656064_o.jpg', ''),
(9, 'Another-Test', 'fims-favi.png', ''),
(10, 'Testing-working', 'new-logo.png', ''),
(11, 'One Last Check', 'testingforthis.jpg', ''),
(12, 'video-test', 'Screen Shot 2018-11-25 at 11.10.10 PM.png', 'testingforthis.jpg'),
(16, 'vid-test-5', 'organlogo_main.png', '06-InfuserProtype 3DAnimation.mp4');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_organs`
--

CREATE TABLE `tbl_organs` (
  `id` int(10) UNSIGNED NOT NULL,
  `organ_name` varchar(30) NOT NULL,
  `organ_icon` varchar(15) NOT NULL,
  `organ_infoOne` varchar(1000) NOT NULL,
  `organ_infoTwo` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_organs`
--

INSERT INTO `tbl_organs` (`id`, `organ_name`, `organ_icon`, `organ_infoOne`, `organ_infoTwo`) VALUES
(1, 'The Heart', 'heart.svg', 'Heart transplant is an operation in which a failing, diseased heart is replaced with a healthier, donor heart. These types of transplants are performed when all treatment options for heart problems are ineffective, and heart failure is occuring. Heart failure can be caused by several conditions, included the weakening of the heart muscle (cardiomyopathy), coronary artery disease, heart valve disease, a congenital heart defect, ventricular arrhythmias, or even the failure of a previous heart transplant. While a heart transplant is a major operation, it can result in drastic life improvements for recipients.', 'Did you know: The waiting times for heart transplants are long — often more than six months. Unfortunately, there aren\'t enough hearts for every person in need, and some people die while waiting for a transplant.'),
(2, 'The Lungs', 'lung.svg', 'Unhealthy or damaged lungs can make it difficult for your body to get the oxygen it needs to survive. A variety of diseases and conditions can damage your lungs and hinder their ability to function effectively. Lung damage can often be treated with medication or with special breathing devices, but when these measures no longer help or your lung function becomes life-threatening, doctors may suggest a single-lung transplant or a double-lung transplant.', 'Did you know: The one-year survival rate after a lung transplant is 85 percent. Some 30 percent of patients live at least an extra decade. '),
(3, 'The Kidney', 'kidney.svg', 'The kidneys are two bean-shaped organs located on either side of the spine just below the rib cage. Each one is about the size of a fist. Their main function is to filter and remove excess waste, minerals and fluid from the blood by producing urine. When your kidneys lose this filtering ability, harmful levels of fluid and waste accumulate in your body, which can raise your blood pressure and result in kidney failure also known as end-stage renal disease. End-stage renal disease occurs when the kidneys have lost about 90 percent of their ability to function normally.', 'Did you know: It is estimated that the province of Ontario alone loses approximately $100 million dollars every year supporting the care of those on the organ donation waiting list for a kidney. The average patient on the waiting list for a kidney will wait for four years for their new organ.'),
(4, 'The Liver', 'liver.svg', 'Your liver is your largest internal organ and performs several critical functions, including: removing bacteria and toxins from the blood, preventing infection and regulating immune responses, processing nutrients, medications and hormones, producing bile, which helps the body absorb fats, cholesterol and fat-soluble vitamins and making proteins that help blood clot. Liver transplants are usually reserved as a treatment option for people who have significant complications due to end-stage chronic liver disease. In rare cases, sudden failure of a previously normal liver may occur.', 'Did you know: The number of people waiting for a liver transplant greatly exceeds the number of available deceased-donor livers. The median waiting time for Canadians in need of a liver transplant has soared by almost 120 days during the past five years, according to newly published data. Patients who are not critically ill now wait 278 days, but a leading surgeon says even that figure underestimates the reality.'),
(5, 'The Pancreas', 'pancreas.svg', 'A pancreas transplant is a surgical procedure to place a healthy pancreas from a deceased donor into a person whose pancreas no longer functions properly. One of the main functions of your pancreas is to make insulin, a hormone that regulates the absorption of sugar (glucose) into your cells. If your pancreas doesn\'t make enough insulin, blood sugar levels can rise to unhealthy levels, resulting in type 1 diabetes. A pancreas transplant can restore normal insulin production and improve blood sugar control in people with diabetes.', 'Did you know: According to the Organ Procurement and Transplantation Network, the overall survival rate at five years after pancreas transplant is about 91 percent. Individuals that receive a pancreas transplant can expect the organ to last for ten years or more, on average.'),
(6, 'The Intestine', 'intestine.svg', 'Small bowel transplant replaces a diseased or shortened small bowel with a healthy bowel from a donor. Some people are born with or develop irreversible intestinal failure. Intestinal failure occurs when a person\'s intestines can\'t digest food and absorb fluids, electrolytes and nutrients essential to life and normal development. ', 'Did you know: There is a limited time that organs can be viable for transplant to a matching donor on the waiting list. The intestines are only viable for 4-6 hours before they are no longer viable.'),
(7, 'The Bones', 'bones.svg', 'A bone marrow transplant is a procedure that infuses healthy blood stem cells into your body to replace your damaged or diseased bone marrow. A bone marrow transplant may be necessary if your bone marrow stops working and doesn\'t produce enough healthy blood cells. A bone marrow transplant may be used to safely allow treatment of your condition with high doses of chemotherapy or radiation by replacing or rescuing bone marrow damaged by treatment, replace diseased or damaged marrow with new stem cells, or provide new stem cells, which can help kill cancer cells directly.', 'Did you know: A bone marrow transplant can save the life of someone battling leukemia, lymphoma, or another blood cancer.'),
(8, 'The Cornea', 'eyes.svg', 'A cornea transplant is a surgical procedure to replace part of your cornea with corneal tissue from a donor. Your cornea is the transparent, dome-shaped surface of your eye that accounts for a large part of your eye\'s focusing power. A cornea transplant can restore vision, reduce pain and improve the appearance of a damaged or diseased cornea.', 'Did you know: Corneal transplantation is one of the most frequently performed human transplant procedures. Over 90% of all corneal transplant operations successfully restore the corneal recipient’s vision.');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_testimonial`
--

CREATE TABLE `tbl_testimonial` (
  `t_id` int(10) UNSIGNED NOT NULL,
  `t_name` varchar(35) NOT NULL,
  `t_vid` varchar(30) NOT NULL,
  `t_pic` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_testimonial`
--

INSERT INTO `tbl_testimonial` (`t_id`, `t_name`, `t_vid`, `t_pic`) VALUES
(1, 'Andrew', 'andrew.mp4', 'andrew.jpg'),
(2, 'Sarah', 'sarah.mp4', 'sarah.jpg'),
(3, 'Jared', 'jared.mp4', 'jared.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

CREATE TABLE `tbl_user` (
  `user_id` int(10) UNSIGNED NOT NULL,
  `user_fname` varchar(25) NOT NULL,
  `user_name` varchar(15) NOT NULL,
  `user_pass` varchar(30) NOT NULL,
  `user_email` varchar(50) NOT NULL,
  `user_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`user_id`, `user_fname`, `user_name`, `user_pass`, `user_email`, `user_date`) VALUES
(1, 'admin', 'admin', '123', 'admin@waywf.ca', '2019-02-28 16:18:14'),
(3, 'Joanna', 'Testing', '123', 'joannabaile@gmail.com', '2019-03-02 04:59:32'),
(4, 'Test', 'Two', '123', 'two@hello.ca', '2019-03-02 05:01:14'),
(5, 'Tester', 'Creation', 'qwe12345', 'jo@baile.com', '2019-03-02 14:20:41'),
(6, 'hello', 'test', '123', 'test@user.ca', '2019-03-02 14:21:40'),
(7, 'Joanna', 'fromVue', '123', 'vue@test.ca', '2019-03-19 14:29:11');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_file`
--
ALTER TABLE `tbl_file`
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `tbl_organs`
--
ALTER TABLE `tbl_organs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_testimonial`
--
ALTER TABLE `tbl_testimonial`
  ADD UNIQUE KEY `t_id` (`t_id`);

--
-- Indexes for table `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD UNIQUE KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_file`
--
ALTER TABLE `tbl_file`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `tbl_organs`
--
ALTER TABLE `tbl_organs`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `tbl_testimonial`
--
ALTER TABLE `tbl_testimonial`
  MODIFY `t_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `user_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
