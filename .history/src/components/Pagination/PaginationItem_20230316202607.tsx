interface PaginationItemProps {
  isCurrent?: boolean;
  number: number;
}

export function PaginationItem({isCurrent = false, number}: PaginationItemProps){
  if(isCurrent){
    return()
  }
}