-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th1 31, 2023 lúc 05:51 PM
-- Phiên bản máy phục vụ: 10.4.27-MariaDB
-- Phiên bản PHP: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `project`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `brands`
--

CREATE TABLE `brands` (
  `id` int(11) NOT NULL,
  `name` text DEFAULT NULL,
  `address` text DEFAULT NULL,
  `numberphone` text DEFAULT NULL,
  `longitude` double DEFAULT 0,
  `latitude` double DEFAULT 0,
  `photo` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Đang đổ dữ liệu cho bảng `brands`
--

INSERT INTO `brands` (`id`, `name`, `address`, `numberphone`, `longitude`, `latitude`, `photo`) VALUES
(2, 'Toco Toco - 619 Vũ Tông Phan', '619 P. Vũ Tông Phan, Khương Đình, Thanh Xuân, Hà Nội', '1900636036', 0, 0, 'https://bizweb.dktcdn.net/100/017/493/articles/4cb54ae43868dc368579.jpg?v=1564369931343'),
(3, 'Toco Toco - Phố Hàng Bài', '4 Phố Hàng Bài, Tràng Tiền, Hoàn Kiếm, Hà Nội', '1900636036', 0, 0, 'https://farm1.staticflickr.com/555/19155376923_d59ea2e63e_o.jpg'),
(4, 'Toco Toco - Cửa Bắc', '92 Cửa Bắc', '1900636036', 0, 0, 'https://farm1.staticflickr.com/501/19587223120_b264855b31_o.jpg'),
(5, 'Toco Toco – Vincom Mega Mall Times City', '458 Minh Khai', '1900636036', 0, 0, 'https://images.foody.vn/res/g6/51714/s750/foody-tra-sua-tocotoco-times-city-655-636677881234421628.jpg');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `images` text DEFAULT NULL,
  `header` text DEFAULT NULL,
  `content` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Đang đổ dữ liệu cho bảng `news`
--

INSERT INTO `news` (`id`, `images`, `header`, `content`) VALUES
(2, 'https://vcdn-ngoisao.vnecdn.net/2020/08/20/Hinh-1-thay-7234-1597914446.png', 'Hinh1', 'Hinh1'),
(3, 'https://media.foody.vn/res/g71/704999/prof/s/image-87ee56e9-210113164525.jpeg', 'Hinh1', 'Hinh1'),
(4, 'https://images.foody.vn/res/g93/922790/prof/s640x400/foody-upload-api-foody-mobile-960x550-200205154226.jpg', 'Hinh1', 'Hinh1');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `address_wallet` int(11) DEFAULT NULL,
  `products` int(11) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `payment` text DEFAULT NULL,
  `address_card` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `status` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Đang đổ dữ liệu cho bảng `orders`
--

INSERT INTO `orders` (`id`, `address_wallet`, `products`, `address`, `payment`, `address_card`, `created_at`, `status`) VALUES
(10, 11, 3, 'Nha', '280000', 0, '2021-12-04 08:51:27', 0),
(11, 11, 3, 'Nha', '840000', 0, '2021-12-04 08:55:02', 0),
(12, 11, 3, 'Nha', '280000', 0, '2021-12-05 15:07:03', 0),
(13, 16, 6, 'Nha', '560000', 0, '2021-12-06 02:59:48', 0),
(14, 9, 2, 'Nha', '280000', 0, '2023-01-30 13:30:40', 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `localize` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `product_name` text DEFAULT NULL,
  `price` double DEFAULT NULL,
  `base_price` double DEFAULT NULL,
  `active` bit(1) DEFAULT NULL,
  `branch` text DEFAULT NULL,
  `slug` text DEFAULT NULL,
  `high_res_image` text DEFAULT NULL,
  `image` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`id`, `localize`, `description`, `product_name`, `price`, `base_price`, `active`, `branch`, `slug`, `high_res_image`, `image`, `created_at`) VALUES
(1, 'Ly inox ống hút đen nhám', 'Màu đen ngày nào cũng được khen- Chiếc ly inbox kèm ống hút mang sắc đen ngầu này sẽ là người bạn đồng hành may mắn mỗi ngày bên bạn, nước ngon hơn, nhiều cảm hứng hơn. \nDung tích: 500 ml\nChất liệu: Inox, nhựa', 'Ly inox ống hút đen nhám', 280000, 280000, b'1', 'TCH', 'ly-inox-ong-hut-den-nham', 'https://minio.thecoffeehouse.com/image/admin/5eb92ae0ee4dc00012633b2b_Binh-inox-ong-hut-den-nham_338437.jpg', 'https://minio.thecoffeehouse.com/image/admin/5eb92ae0ee4dc00012633b2b_Binh-inox-ong-hut-den-nham_338437_400x400.jpg', '2021-12-04 08:52:04'),
(2, 'Ly Inox Ống Hút Xanh Biển', 'Màu xanh \"chốt\" gì cũng nhanh - Chiếc ly inbox kèm ống hút mang sắc xanh này sẽ là người bạn đồng hành may mắn mỗi ngày bên bạn, nước ngon hơn, nhiều cảm hứng hơn. \nDung tích: 500 ml\nChất liệu: Inox, nhựa', 'Ly Inox Ống Hút Xanh Biển', 280000, 280000, b'1', 'TCH', 'ly-inox-ong-hut-xanh-bien', 'https://minio.thecoffeehouse.com/image/admin/5eb92ae1ee4dc00012633b2c_Binh-inox-ong-hut-xanh-bien_233565.jpg', 'https://minio.thecoffeehouse.com/image/admin/5eb92ae1ee4dc00012633b2c_Binh-inox-ong-hut-xanh-bien_233565_400x400.jpg', '2021-12-04 08:52:04'),
(3, 'Ice Vietnamese Coffee With Condensed Milk', 'Cà phê Đắk Lắk nguyên chất được pha phin truyền thống kết hợp với sữa đặc tạo nên hương vị đậm đà, hài hòa giữa vị ngọt đầu lưỡi và vị đắng thanh thoát nơi hậu vị.', 'Cà Phê Sữa Đá', 29000, 29000, b'1', 'TCH', 'ca-phe-sua-da', 'https://minio.thecoffeehouse.com/image/admin/caphesuada-moi_847396.jpg', 'https://minio.thecoffeehouse.com/image/admin/caphesuada-moi_847396_400x400.jpg', '2021-12-04 08:52:04'),
(4, 'Cà Phê Sữa Nóng', 'Cà phê được pha phin truyền thống kết hợp với sữa đặc tạo nên hương vị đậm đà, hài hòa giữa vị ngọt đầu lưỡi và vị đắng thanh thoát nơi hậu vị.', 'Cà Phê Sữa Nóng', 35000, 35000, b'1', 'TCH', 'ca-phe-sua-da', 'https://minio.thecoffeehouse.com/image/admin/cfsua-bacsiu_nong-(1)_139962.jpg', 'https://minio.thecoffeehouse.com/image/admin/cfsua-bacsiu_nong-(1)_139962_400x400.jpg', '2021-12-04 08:52:04'),
(5, 'Bạc Sỉu', 'Bạc sỉu chính là \"Ly sữa trắng kèm một chút cà phê\". Thức uống này rất phù hợp những ai vừa muốn trải nghiệm chút vị đắng của cà phê vừa muốn thưởng thức vị ngọt béo ngậy từ sữa.', 'Bạc Sỉu', 29000, 29000, b'1', 'TCH', 'bac-siu', 'https://minio.thecoffeehouse.com/image/admin/bacsiu-moi_532206.jpg', 'https://minio.thecoffeehouse.com/image/admin/bacsiu-moi_532206_400x400.jpg', '2021-12-04 08:52:04');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` text DEFAULT NULL,
  `email` text DEFAULT NULL,
  `address` text DEFAULT NULL,
  `password` text DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `fullname` text DEFAULT NULL,
  `numberphone` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `address`, `password`, `status`, `createdAt`, `updatedAt`, `fullname`, `numberphone`) VALUES
(9, 'adminkhanh', 'khanhnd@reactplus.jp', 'hà đông', '', 0, '2021-12-04 08:52:32', '2021-12-04 08:52:32', 'Nguyễn Duy Khánh', '0889650500'),
(11, '', '', '', '', 0, '2021-12-04 08:52:32', '2021-12-04 08:52:32', '', '0966905653'),
(12, '', '', '', '', 0, '2021-12-04 08:52:32', '2021-12-04 08:52:32', '', '0966905654'),
(13, '', '', '', '', 0, '2021-12-04 08:52:32', '2021-12-04 08:52:32', '', '0966905655'),
(14, '', '', '', '', 0, '2021-12-04 08:52:32', '2021-12-04 08:52:32', '', NULL),
(15, '', '', '', '', 0, '2021-12-04 08:52:32', '2021-12-04 08:52:32', '', NULL),
(16, '', '', '', '', 0, '2021-12-04 09:11:19', '2021-12-04 09:11:19', '', '0941627299'),
(17, '', '', '', '', 0, '2023-01-08 09:57:04', '2023-01-08 09:57:04', '', '0889650500'),
(18, '', '', '', '', 0, '2023-01-08 10:43:23', '2023-01-08 10:43:23', '', '0000000000');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `wallet`
--

CREATE TABLE `wallet` (
  `id` int(11) NOT NULL,
  `address_wallet` int(11) DEFAULT NULL,
  `money` double DEFAULT NULL,
  `fee` double DEFAULT NULL,
  `banking` text DEFAULT NULL,
  `card` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Đang đổ dữ liệu cho bảng `wallet`
--

INSERT INTO `wallet` (`id`, `address_wallet`, `money`, `fee`, `banking`, `card`) VALUES
(1, 1, 1000000, 0, 'VCB', 1230001123),
(2, 9, 220000, 0, 'VCB', 0),
(3, 11, 999100000, 0, 'VCB', 0),
(4, 12, 0, 0, 'VCB', 0),
(5, 13, 0, 0, 'VCB', 0),
(6, 16, 440000, 0, 'VCB', 0),
(7, 17, 0, 0, 'VCB', 0),
(8, 18, 0, 0, 'VCB', 0);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `wallet`
--
ALTER TABLE `wallet`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `brands`
--
ALTER TABLE `brands`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT cho bảng `wallet`
--
ALTER TABLE `wallet`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
