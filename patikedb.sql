-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 18, 2020 at 10:44 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `patikedb`
--

-- --------------------------------------------------------

--
-- Table structure for table `patike`
--

CREATE TABLE `patike` (
  `id` int(11) NOT NULL,
  `naziv` varchar(45) NOT NULL,
  `model` varchar(45) DEFAULT NULL,
  `opis` varchar(45) DEFAULT NULL,
  `velicina` int(11) DEFAULT NULL,
  `cena` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `patike`
--

INSERT INTO `patike` (`id`, `naziv`, `model`, `opis`, `velicina`, `cena`) VALUES
(22, 'Adidas', 'SuperStar', 'Trcanje', 43, 12000),
(33, 'Nike', 'Tn', 'Patika za trcanje', 45, 18000),
(34, 'New Balance', 'MN 977', 'Casual', 42, 12500),
(35, 'Nike', 'AirMax', 'Sport', 41, 9500),
(37, 'Nike ', 'AirMax', 'Ultra', 43, 15600),
(38, 'Adidas', 'Boost', 'Trcanje', 39, 10000),
(41, 'New Balance', 'TR320', 'Causal', 42, 13500),
(42, 'Adidas', 'AirBoost', 'Trcanje', 39, 8900),
(43, 'Nike', 'AirForce01', 'Casual', 46, 13600),
(45, 'Reebok', 'HG', 'Sport', 41, 8500);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `patike`
--
ALTER TABLE `patike`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_UNIQUE` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `patike`
--
ALTER TABLE `patike`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
