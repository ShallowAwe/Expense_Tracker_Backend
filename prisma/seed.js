// prisma/seed.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting seed...');

  // ============================================
  // 1. Seed Payment Methods
  // ============================================
  console.log('📱 Seeding payment methods...');

  const paymentMethods = [
    { code: 'upi', displayName: 'UPI', icon: '📱', sortOrder: 1 },
    { code: 'credit_card', displayName: 'Credit Card', icon: '💳', sortOrder: 2 },
    { code: 'debit_card', displayName: 'Debit Card', icon: '💳', sortOrder: 3 },
    { code: 'net_banking', displayName: 'Net Banking', icon: '🏦', sortOrder: 4 },
    { code: 'cash', displayName: 'Cash', icon: '💵', sortOrder: 5 },
    { code: 'wallet', displayName: 'Digital Wallet', icon: '👛', sortOrder: 6 },
    { code: 'atm', displayName: 'ATM Withdrawal', icon: '🏧', sortOrder: 7 },
  ];

  for (const method of paymentMethods) {
    await prisma.paymentMethod.upsert({
      where: { code: method.code },
      update: {},
      create: method,
    });
  }

  console.log(`✅ Created ${paymentMethods.length} payment methods`);

  // ============================================
  // 2. Seed Categories (System - Expense)
  // ============================================
  console.log('🏷️  Seeding expense categories...');

  const expenseCategories = [
    { code: 'food_dining', displayName: 'Food & Dining', icon: '🍽️', colorHex: '#FF6B6B', type: 'EXPENSE', sortOrder: 1 },
    { code: 'groceries', displayName: 'Groceries', icon: '🛒', colorHex: '#4ECDC4', type: 'EXPENSE', sortOrder: 2 },
    { code: 'transport', displayName: 'Transport', icon: '🚗', colorHex: '#45B7D1', type: 'EXPENSE', sortOrder: 3 },
    { code: 'entertainment', displayName: 'Entertainment', icon: '🎬', colorHex: '#FFA07A', type: 'EXPENSE', sortOrder: 4 },
    { code: 'shopping', displayName: 'Shopping', icon: '🛍️', colorHex: '#98D8C8', type: 'EXPENSE', sortOrder: 5 },
    { code: 'healthcare', displayName: 'Healthcare', icon: '⚕️', colorHex: '#F7DC6F', type: 'EXPENSE', sortOrder: 6 },
    { code: 'utilities', displayName: 'Utilities', icon: '⚡', colorHex: '#BB8FCE', type: 'EXPENSE', sortOrder: 7 },
    { code: 'education', displayName: 'Education', icon: '📚', colorHex: '#85C1E9', type: 'EXPENSE', sortOrder: 8 },
    { code: 'travel', displayName: 'Travel', icon: '✈️', colorHex: '#F8B88B', type: 'EXPENSE', sortOrder: 9 },
    { code: 'bills', displayName: 'Bills & Payments', icon: '📄', colorHex: '#FAD7A0', type: 'EXPENSE', sortOrder: 10 },
    { code: 'investments', displayName: 'Investments', icon: '📈', colorHex: '#82E0AA', type: 'EXPENSE', sortOrder: 11 },
    { code: 'other_expense', displayName: 'Other Expenses', icon: '📌', colorHex: '#BDC3C7', type: 'EXPENSE', sortOrder: 12 },
  ];

  for (const category of expenseCategories) {
    await prisma.category.upsert({
      where: { code: category.code },
      update: {},
      create: {
        ...category,
        isSystem: true,
      },
    });
  }

  console.log(`✅ Created ${expenseCategories.length} expense categories`);

  // ============================================
  // 3. Seed Categories (System - Income)
  // ============================================
  console.log('💰 Seeding income categories...');

  const incomeCategories = [
    { code: 'salary', displayName: 'Salary', icon: '💼', colorHex: '#52C41A', type: 'INCOME', sortOrder: 1 },
    { code: 'freelance', displayName: 'Freelance', icon: '💻', colorHex: '#13C2C2', type: 'INCOME', sortOrder: 2 },
    { code: 'business', displayName: 'Business Income', icon: '🏢', colorHex: '#1890FF', type: 'INCOME', sortOrder: 3 },
    { code: 'investment_income', displayName: 'Investment Returns', icon: '📊', colorHex: '#722ED1', type: 'INCOME', sortOrder: 4 },
    { code: 'refund', displayName: 'Refunds', icon: '↩️', colorHex: '#EB2F96', type: 'INCOME', sortOrder: 5 },
    { code: 'gift', displayName: 'Gifts Received', icon: '🎁', colorHex: '#FA8C16', type: 'INCOME', sortOrder: 6 },
    { code: 'other_income', displayName: 'Other Income', icon: '💵', colorHex: '#A0D911', type: 'INCOME', sortOrder: 7 },
  ];

  for (const category of incomeCategories) {
    await prisma.category.upsert({
      where: { code: category.code },
      update: {},
      create: {
        ...category,
        isSystem: true,
      },
    });
  }

  console.log(`✅ Created ${incomeCategories.length} income categories`);

  console.log('🎉 Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
