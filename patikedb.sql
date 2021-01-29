-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 29, 2021 at 01:09 AM
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
-- Table structure for table `korisnik`
--

CREATE TABLE `korisnik` (
  `id` int(11) NOT NULL,
  `Ime` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `Username` varchar(100) COLLATE utf8_bin NOT NULL,
  `Sifra` varchar(250) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `korisnik`
--

INSERT INTO `korisnik` (`id`, `Ime`, `Username`, `Sifra`) VALUES
(2, 'Andrija', 'andrija98', '$2b$10$aHGURGindt5pCUofqhvcFuGb0PCTdPDN1MJu7BJ71H6LYxqLTU8bm'),
(3, 'Proba', 'probaaa', '$2b$10$RVEqF3Wazh8Nw7POwZdgo.PP54Ywf0cBDElt6r9GGBTls8f2YzuDe'),
(4, 'Nikola Petrovic', 'nikola94', '$2b$10$PRby.KgVo84nggBTG8VKDOh5QVMtOzbeHWC3nA5C6gpGgaQlZoXJa'),
(5, 'Markoo', 'marko98', '$2b$10$sNwc6gtQMjxM7ohiUHNEsuFHD4oHym0jSMurFMobyWfoQAzvL6DeG'),
(6, 'Dragan Nikolic', 'dragann', '$2b$10$gFvulwtlmSS7MxLCbICmUuR/Jt6PH6Dh4LzbmLIDVXonB1OIoYuSy'),
(7, 'Milos', 'milos98', '$2b$10$8s9PIbSMOd39UD0TygXO0Oyqpm.xhWSmtRzjb5hy8W8yjv9wei3TW'),
(8, 'Jovana', 'jovana98', '$2b$10$AlG.IpMWSzhn4JlWYXdZpuATt9ixtBIPO32L9wYHVh6vtXM/FOENW');

-- --------------------------------------------------------

--
-- Table structure for table `korpa`
--

CREATE TABLE `korpa` (
  `id` int(11) NOT NULL,
  `idPatike` int(11) DEFAULT NULL,
  `idKorisnika` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `ocene`
--

CREATE TABLE `ocene` (
  `id` int(11) NOT NULL,
  `ocena` int(100) DEFAULT NULL,
  `opis` varchar(100) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

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
(22, 'Adidas', 'Superstar', 'Tracnje', 44, 12000),
(33, 'Nike', 'Tn', 'Patika za trcanje', 45, 18000),
(35, 'Nike', 'AirMax', 'Sport', 41, 9500),
(37, 'Nike ', 'AirMax', 'Ultra', 43, 15600),
(38, 'Adidas', 'Boost', 'Trcanje', 39, 10000),
(41, 'New Balance', 'TR320', 'Causal', 42, 13500),
(42, 'Adidas', 'AirBoost', 'Trcanje', 39, 8900),
(45, 'Rebook', 'HG', 'Sportt', 44, 9980);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `korisnik`
--
ALTER TABLE `korisnik`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ocene`
--
ALTER TABLE `ocene`
  ADD PRIMARY KEY (`id`);

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
-- AUTO_INCREMENT for table `korisnik`
--
ALTER TABLE `korisnik`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `ocene`
--
ALTER TABLE `ocene`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `patike`
--
ALTER TABLE `patike`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
