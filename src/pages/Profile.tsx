import React from "react";
import { Card, CardBody, Avatar, Input, Button, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    // Handle form submission
  };

  return (
    <div className="max-w-3xl p-4 flex flex-col gap-6  w-full flex m-auto h-screen">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold text-default-900">My Profile</h1>
        <p className="text-sm text-default-500">
          Manage your profile and preferences
        </p>
      </div>

      <Card className="w-full">
        <CardBody className="gap-6">
          {/* Profile Photo Section */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Avatar
              src="https://img.heroui.chat/image/avatar?w=200&h=200&u=1"
              className="w-24 h-24"
            />
            <div className="flex flex-col gap-1">
              <h2 className="text-xl font-semibold text-default-900">
                Profile Photo
              </h2>
              <p className="text-sm text-default-500">
                Upload a photo to help restaurants identify you
              </p>
              <Button
                color="primary"
                variant="flat"
                size="sm"
                startContent={<Icon icon="lucide:upload" />}
                className="w-fit mt-2"
              >
                Upload Photo
              </Button>
            </div>
          </div>

          <Divider />

          {/* Profile Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Full Name"
                placeholder="Enter your full name"
                defaultValue="John Doe"
                startContent={
                  <Icon icon="lucide:user" className="text-default-400" />
                }
                isReadOnly={!isEditing}
              />

              <Input
                type="email"
                label="Email Address"
                placeholder="Enter your email"
                defaultValue="john.doe@example.com"
                startContent={
                  <Icon icon="lucide:mail" className="text-default-400" />
                }
                isReadOnly={!isEditing}
              />

              <Input
                type="tel"
                label="Phone Number"
                placeholder="Enter your phone number"
                defaultValue="+1 (555) 000-0000"
                startContent={
                  <Icon icon="lucide:phone" className="text-default-400" />
                }
                isReadOnly={!isEditing}
              />

              <Input
                label="Delivery Address"
                placeholder="Enter your delivery address"
                defaultValue="123 Food Street, Cuisine City"
                startContent={
                  <Icon icon="lucide:map-pin" className="text-default-400" />
                }
                isReadOnly={!isEditing}
              />
            </div>

            <div className="flex justify-end gap-2">
              {isEditing ? (
                <>
                  <Button
                    variant="flat"
                    color="default"
                    onPress={() => setIsEditing(false)}
                  >
                    Cancel
                  </Button>
                  <Button color="primary" type="submit">
                    Save Changes
                  </Button>
                </>
              ) : (
                <Button
                  color="primary"
                  variant="flat"
                  startContent={<Icon icon="lucide:edit-2" />}
                  onPress={() => setIsEditing(true)}
                >
                  Edit Profile
                </Button>
              )}
            </div>
          </form>

          <Divider />

          {/* Food Preferences Section */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-default-900">
              Food Preferences
            </h3>
            <div className="flex gap-2 flex-wrap">
              <Button
                size="sm"
                variant="flat"
                startContent={<Icon icon="lucide:leaf" />}
              >
                Vegetarian
              </Button>
              <Button
                size="sm"
                variant="flat"
                startContent={<Icon icon="lucide:flame" />}
              >
                Spice Level
              </Button>
              <Button
                size="sm"
                variant="flat"
                startContent={<Icon icon="lucide:utensils" />}
              >
                Cuisine Types
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
