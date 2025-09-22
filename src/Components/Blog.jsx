
import React from "react";
import BlogCard from "./BlogCard";

function Blog() {
  const blogs = [
    {
      id: 1,
      title: "5 Quick Indian Dishes for Busy Weeknights",
      author: "Chef Raj",
      date: "Sep 15, 2025",
      content: `
        Cooking doesn’t have to be stressful. In this blog, we share 5 quick Indian recipes 
        that you can make in under 30 minutes. From spicy chole to buttery naan, you’ll find 
        something for every craving. Step-by-step instructions and tips included for each dish.
      `,
      image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg",
    },
    {
      id: 2,
      title: "The Secret to Perfect Paneer Butter Masala",
      author: "Chef Priya",
      date: "Sep 10, 2025",
      content: `
        Paneer Butter Masala is one of India’s most loved curries. Learn how to make it creamy, 
        flavorful, and restaurant-quality right at home. We cover paneer prep, masala blending, 
        and tips to get the texture perfect.
      `,
      image: "https://static.vecteezy.com/system/resources/thumbnails/030/323/030/small_2x/delicious-paneer-bater-masala-dish-in-an-indian-restaurant-generative-ai-photo.jpg",
    },
    {
      id: 3,
      title: "Top 10 Spices Every Indian Kitchen Needs",
      author: "Chef Neha",
      date: "Sep 5, 2025",
      content: `
        Spices make Indian cuisine magical. In this blog, we reveal the top 10 essential spices 
        for every kitchen, along with tips on how to use them effectively to elevate your cooking.
      `,
      image: "https://images.pexels.com/photos/678414/pexels-photo-678414.jpeg",
    },
  ];

  return (
    <div>
      {blogs.map(blog => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}

export default Blog;
