import React from "react";

type FooterProps = {
  address: string;
  description: string;
  unsubscribeLink: string;
  socialPanel: React.ReactNode;
  title: string;
};

const Footer: React.FC<FooterProps> = ({
  address,
  description,
  unsubscribeLink,
  socialPanel,
  title,
}: FooterProps) => {
  if (!socialPanel) {
    throw new Error("no socialPanel was passed");
  }

  if (!address) {
    throw new Error("invalid address");
  }

  if (!description) {
    throw new Error("invalid description");
  }

  if (!unsubscribeLink) {
    throw new Error("invalid unsubscribeLink");
  }

  if (!title) {
    throw new Error("invalid title");
  }

  return ();

  