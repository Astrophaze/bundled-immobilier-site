-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : mer. 11 fév. 2026 à 08:20
-- Version du serveur : 11.4.10-MariaDB
-- Version de PHP : 8.3.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `luvo9854_immobilier`
--

-- --------------------------------------------------------

--
-- Structure de la table `article`
--

CREATE TABLE `article` (
  `id` int(11) NOT NULL,
  `titre` varchar(255) NOT NULL,
  `photoUrl` varchar(255) DEFAULT NULL,
  `contenu` text DEFAULT NULL,
  `libelle_lien` varchar(255) DEFAULT NULL,
  `href_lien` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

--
-- Déchargement des données de la table `article`
--

INSERT INTO `article` (`id`, `titre`, `photoUrl`, `contenu`, `libelle_lien`, `href_lien`) VALUES
(1, 'Qui sommes nous ?', 'images/our office.png', 'Lorem ipsum dolor sit amet consectetur adipiscing elit luctus metus nec nascetur, sodales dui ante fusce mollis nibh netus praesent enim. Varius tempor maecenas sapien volutpat primis dui gravida, risus dictum justo ut ligula sed massa posuere, metus aliquet ante porta etiam urna. \r\n\r\nLorem ipsum dolor sit amet consectetur adipiscing elit integer turpis montes, pretium fringilla suspendisse condimentum orci interdum vivamus diam. Conubia tempor ornare class sollicitudin facilisi nulla montes praesent posuere vestibulum porttitor facilisis, mattis imperdiet euismod rhoncus gravida sociis tellus fermentum fusce venenatis sed lobortis, rutrum himenaeos ad at fames netus vulputate inceptos sagittis cras donec.', 'Voir nos biens', 'offres'),
(2, 'Contactez-nous', NULL, 'Que vous soyez vendeur, acheteur, propriétaire ou à la recherche d\'un bien à louer, vous trouverez ici toutes les informations dont vous aurez besoin. Nous vous invitons à découvrir et à parcourir notre catalogue de biens disponibles à la vente et à la location.\r\n\r\nLorem ipsum dolor sit amet consectetur adipiscing elit luctus metus nec nascetur, sodales dui ante fusce mollis nibh netus praesent enim. \r\n\r\nSUPER AGENCE, CONSEIL IMMOBILIER', NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `telephone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `date_envoi` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

--
-- Déchargement des données de la table `contact`
--

INSERT INTO `contact` (`id`, `nom`, `prenom`, `telephone`, `email`, `message`, `date_envoi`) VALUES
(1, 'Jean', 'Jean', 'Jean', 'Jean', 'Jean', '2026-02-09 14:28:40'),
(2, 'Pineau', 'Hugo', '0123456789', 'hugo@pineau.fr', 'Je souhaiterais faire un programme qui compare les exigence du client avec les caractéristiques de milliers de biens immobilier comme ca ca prend bien longtemps', '2026-02-10 10:31:41'),
(3, 'Tapis', 'Bernard', '0123456789', 'poussiere.sous@tapis.fr', '*kof kof kof*', '2026-02-10 10:32:30'),
(4, 'MANEVAL', 'EMMANUEL', '0658752762', 'man.manu@hotmail.fr', 'vwxcvwxvwxcbxcbwcvxvwx', '2026-02-10 13:46:09'),
(5, 'MANEVAL', 'EMMANUEL', '0658752762', 'man.manu@hotmail.fr', 'rgqwdgqsgv', '2026-02-10 13:53:23'),
(6, 'MANEVAL', 'EMMANUEL', '0658752762', 'man.manu@hotmail.fr', 'bonjour bonjour', '2026-02-10 14:08:54');

-- --------------------------------------------------------

--
-- Structure de la table `offre`
--

CREATE TABLE `offre` (
  `id` int(11) NOT NULL,
  `libelle` varchar(255) NOT NULL,
  `photoUrl` varchar(255) NOT NULL,
  `surface` int(11) NOT NULL,
  `ville` varchar(255) NOT NULL,
  `prix` decimal(10,2) NOT NULL,
  `isAVendre` tinyint(4) NOT NULL DEFAULT 0,
  `isALouer` tinyint(4) NOT NULL DEFAULT 0,
  `id_type` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Déchargement des données de la table `offre`
--

INSERT INTO `offre` (`id`, `libelle`, `photoUrl`, `surface`, `ville`, `prix`, `isAVendre`, `isALouer`, `id_type`) VALUES
(1, 'Appartement F2 lumineux Moulins', 'images/BAT A.png', 55, 'Moulins', 125000.00, 1, 0, 3),
(2, 'Studio cozy centre-ville Montluçon', 'images/EVEREST BAT A.png', 28, 'Montluçon', 89000.00, 1, 0, 2),
(3, 'F3 spacieux avec balcon Vichy', 'images/MONT BLANC BAT B.png', 75, 'Vichy', 165000.00, 1, 0, 4),
(4, 'Bureau moderne Cusset', 'images/EVEREST BAT A.png', 60, 'Cusset', 950.00, 0, 1, 1),
(5, 'Terrain constructible Yssingeaux', 'images/BAT A.png', 2500, 'Yssingeaux', 45000.00, 1, 0, 5),
(6, 'F2 rénové proche gare Gannat', 'images/BAT A.png', 52, 'Gannat', 118000.00, 1, 0, 3),
(7, 'Studio meublé Avermes', 'images/EVEREST BAT A.png', 32, 'Avermes', 480.00, 0, 1, 2),
(8, 'F3 familial Néris-les-Bains', 'images/BAT A.png', 85, 'Néris-les-Bains', 195000.00, 1, 0, 4),
(9, 'Bureau avec parking Moulins', 'images/MONT BLANC BAT B.png', 80, 'Moulins', 1200.00, 0, 1, 1),
(10, 'F2 avec terrasse Saint-Pourçain-sur-Sioule', 'images/EVEREST BAT A.png', 58, 'Saint-Pourçain-sur-Sioule', 135000.00, 1, 0, 3),
(11, 'Terrain à bâtir Charroux', 'images/MONT BLANC BAT B.png', 3200, 'Charroux', 52000.00, 1, 0, 5),
(12, 'Studio étudiant Montluçon', 'images/BAT A.png', 25, 'Montluçon', 420.00, 0, 1, 2),
(13, 'F3 ensoleillé Vichy', 'images/MONT BLANC BAT B.png', 78, 'Vichy', 172000.00, 1, 0, 4),
(14, 'Bureau commercial Cusset', 'images/EVEREST BAT A.png', 100, 'Cusset', 1400.00, 0, 1, 1),
(15, 'Terrain agricole Yssingeaux', 'images/BAT A.png', 5000, 'Yssingeaux', 75000.00, 1, 0, 5),
(16, 'F2 calme Gannat', 'images/EVEREST BAT A.png', 48, 'Gannat', 110000.00, 1, 0, 3),
(17, 'Studio équipé centre Avermes', 'images/EVEREST BAT A.png', 35, 'Avermes', 520.00, 0, 1, 2),
(18, 'F3 spacieux jardin Moulins', 'images/MONT BLANC BAT B.png', 92, 'Moulins', 210000.00, 1, 0, 4),
(19, 'Bureau avec vitrine Montluçon', 'images/EVEREST BAT A.png', 75, 'Montluçon', 950.00, 0, 1, 1),
(20, 'Terrain viabilisé Néris-les-Bains', 'images/BAT A.png', 2800, 'Néris-les-Bains', 60000.00, 1, 0, 5);

-- --------------------------------------------------------

--
-- Structure de la table `type`
--

CREATE TABLE `type` (
  `id` int(11) NOT NULL,
  `libelle` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Déchargement des données de la table `type`
--

INSERT INTO `type` (`id`, `libelle`) VALUES
(1, 'Bureaux'),
(2, 'Studio'),
(3, 'F2'),
(4, 'F3'),
(5, 'Terrain');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `offre`
--
ALTER TABLE `offre`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `type`
--
ALTER TABLE `type`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `article`
--
ALTER TABLE `article`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `offre`
--
ALTER TABLE `offre`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT pour la table `type`
--
ALTER TABLE `type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
