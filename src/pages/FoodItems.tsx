import React from "react";
import { Card, CardBody, Button, Chip, Input } from "@heroui/react";
import { Icon } from "@iconify/react";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  isVeg: boolean;
  category: string;
}

export default function FoodMenu() {
  const [selectedCategory, setSelectedCategory] = React.useState("all");

  const categories = [
    { id: "all", name: "All", icon: "lucide:utensils" },
    { id: "popular", name: "Popular", icon: "lucide:trending-up" },
    { id: "main", name: "Main Course", icon: "lucide:beef" },
    { id: "starters", name: "Starters", icon: "lucide:soup" },
    { id: "desserts", name: "Desserts", icon: "lucide:cake" },
    { id: "beverages", name: "Beverages", icon: "lucide:coffee" },
  ];

  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Pizza Margherita",
      description: "Classic pizza with tomato, mozzarella & basil",
      price: 8.99,
      rating: 4.7,
      image: "https://img.heroui.chat/image/food?w=400&h=300&u=1",
      isVeg: true,
      category: "main course"
    },
    {
      id: 2,
      name: "Butter Chicken",
      description: "Creamy tomato-based chicken curry",
      price: 10.99,
      rating: 4.6,
      image: "https://img.heroui.chat/image/food?w=400&h=300&u=2",
      isVeg: false,
      category: "main course"
    },
    {
      id: 3,
      name: "Paneer Tikka",
      description: "Grilled spiced paneer skewers",
      price: 7.49,
      rating: 4.5,
      image: "https://img.heroui.chat/image/food?w=400&h=300&u=3",
      isVeg: true,
      category: "starters"
    },
    {
      id: 4,
      name: "Mango Lassi",
      description: "Sweet yogurt-based drink with mango pulp",
      price: 4.99,
      rating: 4.4,
      image: "https://img.heroui.chat/image/food?w=400&h=300&u=4",
      isVeg: true,
      category: "beverages"
    },
    {
      id: 5,
      name: "French Fries",
      description: "Crispy golden fries with ketchup",
      price: 3.49,
      rating: 4.2,
      image: "https://img.heroui.chat/image/food?w=400&h=300&u=5",
      isVeg: true,
      category: "sides"
    },
    {
      id: 6,
      name: "Chicken Biryani",
      description: "Fragrant rice with marinated chicken and spices",
      price: 9.99,
      rating: 4.6,
      image: "https://img.heroui.chat/image/food?w=400&h=300&u=6",
      isVeg: false,
      category: "main course"
    },
    {
      id: 7,
      name: "Chocolate Brownie",
      description: "Warm gooey brownie served with ice cream",
      price: 5.25,
      rating: 4.8,
      image: "https://img.heroui.chat/image/food?w=400&h=300&u=7",
      isVeg: true,
      category: "desserts"
    },
    {
      id: 8,
      name: "Spring Rolls",
      description: "Crispy fried rolls stuffed with veggies",
      price: 6.00,
      rating: 4.3,
      image: "https://img.heroui.chat/image/food?w=400&h=300&u=8",
      isVeg: true,
      category: "starters"
    },
    {
      id: 9,
      name: "Masala Dosa",
      description: "South Indian crepe with spiced potato filling",
      price: 6.99,
      rating: 4.6,
      image: "https://img.heroui.chat/image/food?w=400&h=300&u=9",
      isVeg: true,
      category: "main course"
    },
    {
      id: 10,
      name: "Cold Coffee",
      description: "Chilled coffee blended with milk and ice cream",
      price: 3.99,
      rating: 4.5,
      image: "https://img.heroui.chat/image/food?w=400&h=300&u=10",
      isVeg: true,
      category: "beverages"
    }
  ];
  

  return (
    <div className="max-w-6xl p-4 flex flex-col gap-6 m-auto">
      {/* Search and Filters */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <Input
            placeholder="Search for dishes..."
            startContent={
              <Icon icon="lucide:search" className="text-default-400" />
            }
            className="max-w-md"
          />
          <Button
            variant="flat"
            color="primary"
            startContent={<Icon icon="lucide:filter" />}
          >
            Filters
          </Button>
        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "solid" : "flat"}
              color={selectedCategory === category.id ? "primary" : "default"}
              className="min-w-fit"
              startContent={<Icon icon={category.icon} />}
              onPress={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {menuItems.map((item) => (
          <Card key={item.id} isPressable className="border border-default-200">
            <CardBody className="p-0">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <Chip
                  color={item.isVeg ? "success" : "danger"}
                  variant="flat"
                  size="sm"
                  className="absolute top-2 left-2"
                >
                  {item.isVeg ? "Veg" : "Non-Veg"}
                </Chip>
              </div>
              <div className="p-4 flex flex-col gap-2">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <Chip
                    color="primary"
                    variant="flat"
                    size="sm"
                    startContent={
                      <Icon icon="lucide:star" className="text-warning" />
                    }
                  >
                    {item.rating}
                  </Chip>
                </div>
                <p className="text-small text-default-500">
                  {item.description}
                </p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-large font-semibold">
                    ${item.price}
                  </span>
                  <Button
                    color="primary"
                    size="sm"
                    variant="flat"
                    startContent={<Icon icon="lucide:plus" />}
                  >
                    Add
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
