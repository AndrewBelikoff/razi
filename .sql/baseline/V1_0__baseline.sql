DROP TABLE IF EXISTS `razional`;
CREATE TABLE `razional`
(
    `id`      int          NOT NULL AUTO_INCREMENT,
    `field_1` int,
    `field_2` int unsigned NOT NULL,
    `field_3` int,
    `field_4` varchar(30),
    `field_5` int,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb3;
