const handle8GbMemory = () => {
  getInnerText("extra-memory-cost", 0);
  totalPrice();
};
const handle16GbMemory = () => {
  getInnerText("extra-memory-cost", 180);
  totalPrice();
};
const handle256GbStorage = () => {
  getInnerText("extra-storage-cost", 0);
  totalPrice();
};
const handle512GbStorage = () => {
  getInnerText("extra-storage-cost", 100);
  totalPrice();
};
const handle1TbStorage = () => {
  getInnerText("extra-storage-cost", 180);
  totalPrice();
};
const handleFreeDelivery = () => {
  getInnerText("delivery-cost", 0);
  totalPrice();
};
const handle20Delivery = () => {
  getInnerText("delivery-cost", 20);
  totalPrice();
};
const getInnerText = (id, price) => {
  const getText = document.getElementById(id);
  getText.innerText = price;
};
const getPrice = (id) => {
  const getText = document.getElementById(id);
  const getInnerText = parseInt(getText.innerText);
  return getInnerText;
};
const totalPrice = () => {
  const bestPrice = getPrice("best-price");
  const memoryPrice = getPrice("extra-memory-cost");
  const storagePrice = getPrice("extra-storage-cost");
  const deliveryPrice = getPrice("delivery-cost");
  const totalPrice = bestPrice + memoryPrice + storagePrice + deliveryPrice;
  document.getElementById("total-price").innerText = totalPrice;
  document.getElementById("total").innerText = totalPrice;
};
