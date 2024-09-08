import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card" // Adjust the import path as needed

interface SimpleCardProps {
    title: React.ReactNode;
    content: React.ReactNode;
    cardClass: string;
  }

const SimpleCard: React.FC<SimpleCardProps>  = ({title, content, cardClass}) => {
    return (
        <Card className={`${cardClass} mb-6 mx-auto`} >
            <CardHeader style={{ position: 'relative', zIndex: 2 }}>
                {title}
            </CardHeader>
            <CardContent style={{ position: 'relative', zIndex: 2 }}>
                {content}
            </CardContent>
        </Card>
    );
};

export default SimpleCard;