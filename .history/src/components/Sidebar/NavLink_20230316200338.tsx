export function NavLink() {
  return (
    <Link display="flex" alignItems="center">
      <Icon as={RiDashboardLine} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        Dashboard
      </Text>
    </Link>
  );
}
