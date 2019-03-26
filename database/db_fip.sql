-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Mar 24, 2019 at 01:19 PM
-- Server version: 5.6.38
-- PHP Version: 7.1.12
-- Joanna Baile, Fernando D'Oria, Logan Litman, Carter Rose

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_fip`
--

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
(3, 'Joanna', 'Testing', '123', 'joannabaile@gmail.com', '2019-03-02 04:59:32');

--
-- Indexes for dumped tables
--

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
-- AUTO_INCREMENT for table `tbl_organs`
--
ALTER TABLE `tbl_organs`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `tbl_testimonial`
--
ALTER TABLE `tbl_testimonial`
  MODIFY `t_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `user_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
