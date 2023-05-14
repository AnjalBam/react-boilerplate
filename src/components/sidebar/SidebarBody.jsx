import { VStack } from "@chakra-ui/react"
import SidebarLink from "./SidebarLink"

const SidebarBody = () => {
  return (
    <div>
      <VStack spacing="1" alignItems={"stretch"}>
        <SidebarLink />
        <SidebarLink />
        <SidebarLink />
        <SidebarLink />
      </VStack>
    </div>
  )
}

export default SidebarBody