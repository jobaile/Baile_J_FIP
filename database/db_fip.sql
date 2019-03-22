-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Mar 22, 2019 at 06:26 PM
-- Server version: 5.6.38
-- PHP Version: 7.1.12

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
  `organ_infoOne` varchar(180) NOT NULL,
  `organ_infoTwo` varchar(180) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_organs`
--

INSERT INTO `tbl_organs` (`id`, `organ_name`, `organ_icon`, `organ_infoOne`, `organ_infoTwo`) VALUES
(1, 'heart', 'heart.svg', 'heart info one', 'heart info two'),
(2, 'lungs', 'lung.svg', 'lungs info one', 'lungs info two'),
(3, 'kidney', 'kidney.svg', 'kidney', 'kidney info two'),
(4, 'liver', 'liver.svg', 'liver info one', 'liver info two'),
(5, 'pancreas', 'pancreas.svg', 'pancreas info one', 'pancreas info two'),
(6, 'intestine', 'intestine.svg', 'intestine info 1 ', 'intestine info 2'),
(7, 'bones', 'bones.svg', 'bones info 1', 'bones info 2'),
(8, 'cornea', 'eyes.svg', 'cornea info one', 'cornea info two');

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
