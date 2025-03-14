import { findOrCreateOrganization } from "@/services/organizations";
import { Settings } from "./settings";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings | Iffy",
};

export default async function SettingsPage() {
  const { orgId } = await auth();

  if (!orgId) {
    redirect("/");
  }

  const organization = await findOrCreateOrganization(orgId);

  return (
    <div className="px-12 py-8">
      <Settings organization={organization} />
    </div>
  );
}
