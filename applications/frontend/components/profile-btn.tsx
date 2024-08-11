import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@variant/ui/components/avatar'
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from '@variant/ui/components/dropdown-menu'

import { ProfileBtnNavigationDropdown } from './profile-btn-dropdown'

export function ProfileBtnNavigation() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-3 outline-none">
        <div className="flex flex-col items-end">
          <span className="text-sm font-medium capitalize">
            dolores madrigal da disney
          </span>
          <span className="text-xs text-muted-foreground">
            dolores.madrigal@disney.com
          </span>
        </div>

        <Avatar>
          <AvatarImage src="https://github.com/mkafonso.png" />
          <AvatarFallback>DD</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <ProfileBtnNavigationDropdown />
    </DropdownMenu>
  )
}
