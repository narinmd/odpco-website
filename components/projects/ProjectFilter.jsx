// "use client";

// import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
// import { ListFilterPlus } from "lucide-react";
// import Link from "next/link";
// import React from "react";
// import { PROJECTS } from "./data";
// import { useRouter } from "next/navigation";

// const categories = [
//   ...new Set(PROJECTS.flatMap((project) => project.category)),
// ];

// const filterItemClass =
//   "flex w-36 cursor-pointer items-center justify-center rounded-sm border border-gray-300 px-3 py-2 h-8 text-[length:var(--fs-body)] font-[var(--fw-medium)] text-[var(--brand-gray)] transition-all duration-300 hover:bg-[var(--brand-light-gray)] hover:text-[var(--brand-gray)] ";

// export default function FilterProjects() {
//   const router = useRouter();

//   const handleCategoryChange = (value) => {
//     if (!value) return;

//     router.push(`/projects?category=${encodeURIComponent(value)}`);
//   };

//   return (
//     <section className="mx-10 py-[var(--section-space)]">
//       <div className="flex items-center gap-5 bg-white/50 p-5 justify-between">
//         <div className="flex shrink-0 items-center gap-2">
//           <ListFilterPlus
//             size={22}
//             strokeWidth={1.8}
//             className="text-[var(--brand-blue)]"
//           />

//           <h3 className="text-[length:var(--fs-h3)] text-[var(--brand-blue)]">
//             Filter By ServiceS Category
//           </h3>
//         </div>

//         <ToggleGroup
//           type="single"
//           onValueChange={handleCategoryChange}
//           className="flex flex-wrap gap-2"
//         >
//           <Link href="/projects" className={filterItemClass}>
//             All
//           </Link>

//           {categories.map((category) => (
//             <ToggleGroupItem
//               key={category}
//               value={category}
//               className={filterItemClass}
//             >
//               {category}
//             </ToggleGroupItem>
//           ))}
//         </ToggleGroup>
//       </div>
//     </section>
//   );
// }
