import React, { useEffect, useState } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useGlobalContext } from "../../context/GlobalContext";

function BreadCrumb() {
  const router = useRouter();
  const { updateBreadCrumbs, bc } = useGlobalContext();

  useEffect(() => {
    const capitalizeString = str => {
      const cap = str.charAt(0).toUpperCase() + str.slice(1);

      return cap;
    };

    const generateCrumbs = path => {
      const pathArr = path.split("/").filter(i => i.length > 0);

      const breadcrumbs = pathArr.map((path, index) => {
        const href = "/" + pathArr.slice(0, index + 1).join("/");
        const text = capitalizeString(pathArr[index]);

        return { href: href, title: text };
      });

      return [{ href: "/", title: "Glavna stranica" }, ...breadcrumbs];
    };

    const breadcrumbs = generateCrumbs(router.asPath);

    updateBreadCrumbs(breadcrumbs);
  }, [router.asPath, updateBreadCrumbs]);

  return (
    <Breadcrumb className="breadcrumb-component">
      {bc.map((crumb, index) => {
        // console.log(crumb, index)

        if (index === bc.length - 1) {
          return (
            <BreadcrumbItem isCurrentPage key={index}>
              <p className="last-breadcrumb">{crumb.title}</p>
            </BreadcrumbItem>
          );
        }
        return (
          <BreadcrumbItem key={index}>
            <BreadcrumbLink as={Link} href={crumb.href}>
              {crumb.title}
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
}

export default BreadCrumb;
