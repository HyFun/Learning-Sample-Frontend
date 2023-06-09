/*
 Navicat Premium Data Transfer

 Source Server         : mysql@5.7
 Source Server Type    : MySQL
 Source Server Version : 50742 (5.7.42)
 Source Host           : localhost:3306
 Source Schema         : chat

 Target Server Type    : MySQL
 Target Server Version : 50742 (5.7.42)
 File Encoding         : 65001

 Date: 09/06/2023 18:38:31
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for messages
-- ----------------------------
DROP TABLE IF EXISTS `messages`;
CREATE TABLE `messages` (
  `id` varchar(64) NOT NULL,
  `user_id` int(11) NOT NULL,
  `message` varchar(255) NOT NULL,
  `messageType` varchar(32) NOT NULL,
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of messages
-- ----------------------------
BEGIN;
INSERT INTO `messages` (`id`, `user_id`, `message`, `messageType`, `create_time`) VALUES ('2951cdc8-0a64-4f7f-b462-657e26cf280d', 2, '👋 欢迎[admin]加入群聊~', 'SYSTEM', '2023-06-09 10:37:26');
INSERT INTO `messages` (`id`, `user_id`, `message`, `messageType`, `create_time`) VALUES ('6374fe1e-79e7-493d-9ecb-0130b3c91e07', 2, '👋 欢迎[admin]加入群聊~', 'SYSTEM', '2023-06-09 10:31:32');
INSERT INTO `messages` (`id`, `user_id`, `message`, `messageType`, `create_time`) VALUES ('8372d351-6d9a-4da1-b2ce-60de828044af', 2, '👋 欢迎[admin]加入群聊~', 'SYSTEM', '2023-06-09 10:31:18');
INSERT INTO `messages` (`id`, `user_id`, `message`, `messageType`, `create_time`) VALUES ('bec27f0d-90db-432a-b930-6c50a490dc40', 2, '👋 欢迎[admin]加入群聊~', 'SYSTEM', '2023-06-09 10:32:07');
INSERT INTO `messages` (`id`, `user_id`, `message`, `messageType`, `create_time`) VALUES ('dc47264f-b245-437c-8f92-0f346ccfd7a6', 2, '👋 欢迎[admin]加入群聊~', 'SYSTEM', '2023-06-09 10:36:09');
INSERT INTO `messages` (`id`, `user_id`, `message`, `messageType`, `create_time`) VALUES ('e3b6c203-e840-476b-8f9c-1209387626b6', 2, '👋 欢迎[admin]加入群聊~', 'SYSTEM', '2023-06-09 10:36:41');
INSERT INTO `messages` (`id`, `user_id`, `message`, `messageType`, `create_time`) VALUES ('efbc10f2-cf48-42d0-a5bb-7fdee43f9bf5', 2, '👋 欢迎[admin]加入群聊~', 'SYSTEM', '2023-06-09 10:36:59');
COMMIT;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `avatar_url` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `username` varchar(32) CHARACTER SET utf8 NOT NULL,
  `password` varchar(32) CHARACTER SET utf8 NOT NULL,
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of users
-- ----------------------------
BEGIN;
INSERT INTO `users` (`id`, `avatar_url`, `username`, `password`, `create_time`) VALUES (1, '/upload/avatar.png', 'zhangsan', '123', '2023-06-08 14:06:32');
INSERT INTO `users` (`id`, `avatar_url`, `username`, `password`, `create_time`) VALUES (2, '/upload/4cd2a3c9-1e4e-4693-aab1-ba46a79bb680.jpg', 'admin', 'admin', '2023-06-08 14:07:21');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
