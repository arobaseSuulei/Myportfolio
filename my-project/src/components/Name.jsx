import { Badge, Flex } from "@radix-ui/themes";

export default function Name() {
    return (
        <Flex gap="1" style={{ padding: 0 }}> {/* Réduction du gap et suppression du padding */}
            <Badge color="orange" size="1" style={{ padding: "2px 8px" }}> {/* Ajustement du padding */}
                In progress
            </Badge>
            <Badge color="blue" size="1" style={{ padding: "2px 8px" }}>
                In review
            </Badge>
            <Badge color="green" size="1" style={{ padding: "2px 8px" }}>
                Complete
            </Badge>
        </Flex>
    );
}
