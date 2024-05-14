import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const countAllProducts = async () => {
  const totalProducts = await prisma.product.count();
  return totalProducts;
};

export const countAllProductsOnStock = async (uuid: string) => {
  const totalProductsOnStock = await prisma.stock
    .findUnique({
      where: { uuid },
    })
    .products()
    .count();
  return totalProductsOnStock;
};

export const countProduct = async (sku: string) => {
  const productCount = await prisma.product.count({
    where: { sku },
  });
  return productCount;
};

export const countProductOnStock = async (uuid: string, sku: string) => {
  const productOnStockCount = await prisma.stock
    .findUnique({
      where: { uuid },
    })
    .products({
      where: { sku },
    })
    .count();
  return productOnStockCount;
};

export const countProductByCategory = async (slug: string) => {
  const productByCategoryCount = await prisma.category
    .findUnique({
      where: { slug },
    })
    .products()
    .count();
  return productByCategoryCount;
};

export const countProductOnStockByCategory = async (
  uuid: string,
  slug: string
) => {
  const productOnStockByCategoryCount = await prisma.stock
    .findUnique({
      where: { uuid },
    })
    .products({
      where: { categories: { some: { slug } } },
    })
    .count();
  return productOnStockByCategoryCount;
};
