const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = {
  users: prisma.users,
  profiles: prisma.profiles,
  notifications: prisma.notifications,
  prisma,
  categories : prisma.categories,
  courses: prisma.courses,
  reviews: prisma.reviews,
  orders : prisma.orders,
  myCourse : prisma.myCourse
};
