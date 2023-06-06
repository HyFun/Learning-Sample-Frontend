/*
 Navicat Premium Data Transfer

 Source Server         : mysql@5.7
 Source Server Type    : MySQL
 Source Server Version : 50742 (5.7.42)
 Source Host           : localhost:3306
 Source Schema         : test

 Target Server Type    : MySQL
 Target Server Version : 50742 (5.7.42)
 File Encoding         : 65001

 Date: 06/06/2023 19:23:51
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for genders
-- ----------------------------
DROP TABLE IF EXISTS `genders`;
CREATE TABLE `genders` (
  `id` int(11) NOT NULL,
  `name` varchar(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of genders
-- ----------------------------
BEGIN;
INSERT INTO `genders` (`id`, `name`) VALUES (0, '女');
INSERT INTO `genders` (`id`, `name`) VALUES (1, '男');
INSERT INTO `genders` (`id`, `name`) VALUES (2, '未知');
COMMIT;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `avatar_url` varchar(255) DEFAULT NULL,
  `username` varchar(32) NOT NULL,
  `password` varchar(32) NOT NULL,
  `gender` int(11) DEFAULT NULL,
  `age` int(11) NOT NULL,
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `gender` (`gender`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`gender`) REFERENCES `genders` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
BEGIN;
INSERT INTO `users` (`id`, `avatar_url`, `username`, `password`, `gender`, `age`, `create_time`) VALUES (6, NULL, 'admin', 'admin', 1, 20, '2023-06-06 11:43:51');
INSERT INTO `users` (`id`, `avatar_url`, `username`, `password`, `gender`, `age`, `create_time`) VALUES (7, NULL, 'zhangsan', '123', 1, 25, '2023-06-06 11:44:23');
INSERT INTO `users` (`id`, `avatar_url`, `username`, `password`, `gender`, `age`, `create_time`) VALUES (8, NULL, 'lisi', '123', 1, 21, '2023-06-06 11:44:33');
INSERT INTO `users` (`id`, `avatar_url`, `username`, `password`, `gender`, `age`, `create_time`) VALUES (9, NULL, 'wangwu', '123', 1, 56, '2023-06-06 11:44:45');
INSERT INTO `users` (`id`, `avatar_url`, `username`, `password`, `gender`, `age`, `create_time`) VALUES (10, NULL, '赵六', '123', 1, 60, '2023-06-06 11:44:57');
INSERT INTO `users` (`id`, `avatar_url`, `username`, `password`, `gender`, `age`, `create_time`) VALUES (11, NULL, '小红红', '123', 0, 57, '2023-06-06 11:45:17');
INSERT INTO `users` (`id`, `avatar_url`, `username`, `password`, `gender`, `age`, `create_time`) VALUES (12, NULL, '小明', '123', 1, 43, '2023-06-06 11:45:32');
INSERT INTO `users` (`id`, `avatar_url`, `username`, `password`, `gender`, `age`, `create_time`) VALUES (13, NULL, '小九', '123', NULL, 34, '2023-06-06 11:46:10');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
