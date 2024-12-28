// HelpSupportPage.jsx
import React, { useState, useMemo } from 'react';
import {
    Container,
    Typography,
    TextField,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Box,
    Paper,
    InputAdornment,
    Link,
    useTheme,
} from '@mui/material';
import {
    ExpandMore as ExpandMoreIcon,
    Search as SearchIcon,
    Email as EmailIcon,
} from '@mui/icons-material';

const faqData = [
    {
        id: 1,
        question: 'Problem Sign in',
        answer: `If you're having trouble signing in, please try these steps:

    1. Verify your email address is correct
    2. Reset your password using the "Forgot Password" link
    3. Clear your browser cache and cookies
    4. Try using a different browser
    
    If problems persist, please contact our support team.`,
        keywords: ['login', 'signin', 'password', 'access', 'account'],
    },
    {
        id: 2,
        question: 'How to cancel Subscription',
        answer: `To cancel your subscription:

    1. Log into your account
    2. Go to Account Settings > Subscriptions
    3. Click on "Cancel Subscription"
    4. Follow the confirmation steps
    
    Please note: You'll continue to have access until the end of your current billing period.`,
        keywords: ['cancel', 'subscription', 'billing', 'payment', 'unsubscribe'],
    },
    {
        id: 3,
        question: 'Product offerings',
        answer: `We offer several subscription tiers:

    Basic Plan:
    - Essential features for individuals
    - Basic support
    - $9.99/month

    Pro Plan:
    - Advanced features for professionals
    - Priority support
    - $19.99/month

    Enterprise Plan:
    - Custom solutions for large organizations
    - 24/7 dedicated support
    - Custom pricing
    
    Each plan includes different features and support levels. Visit our pricing page for detailed information.`,
        keywords: ['plans', 'pricing', 'features', 'tiers', 'subscription'],
    },
    {
        id: 4,
        question: 'Contact Support',
        answer: `Need direct assistance? Email us at xyz@gmail.com

    Our support team is available 24/7 and will respond within 24 hours. Please include:
    - Your account email
    - Detailed description of the issue
    - Any relevant screenshots
    
    We'll get back to you as soon as possible!`,
        keywords: ['contact', 'support', 'help', 'email', 'assistance'],
    },
];

const HelpSupportPage = () => {
    const theme = useTheme();
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedPanel, setExpandedPanel] = useState(null);

    // Search functionality
    const filteredFaqs = useMemo(() => {
        if (!searchQuery) return faqData;

        const query = searchQuery.toLowerCase();
        return faqData.filter(faq => {
            return (
                faq.question.toLowerCase().includes(query) ||
                faq.answer.toLowerCase().includes(query) ||
                faq.keywords.some(keyword => keyword.toLowerCase().includes(query))
            );
        });
    }, [searchQuery]);

    // Handle accordion expansion
    const handleAccordionChange = (panel) => (event, isExpanded) => {
        setExpandedPanel(isExpanded ? panel : null);
    };

    return (
        <Container >
            {/* Header Section */}
            <Box textAlign="center" mb={6}>
                <Typography variant="h2" component="h1" gutterBottom>
                    Help & Support
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    We're here to help you with any questions or issues
                </Typography>
            </Box>

            {/* Search Section */}
            <Paper elevation={3} sx={{ p: 4, mb: 6 }}>
                <Typography variant="h6" gutterBottom>
                    How can we help?
                </Typography>
                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Search for answers..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon color="action" />
                            </InputAdornment>
                        ),
                    }}
                />
            </Paper>

            {/* FAQ Section */}
            <Typography variant="h4" gutterBottom alignContent='center' align='center'>
                Frequently Asked Questions
            </Typography>
            <Box mb={6}>
                {filteredFaqs.length > 0 ? (
                    filteredFaqs.map((faq) => (
                        <Accordion
                            key={faq.id}
                            expanded={expandedPanel === faq.id}
                            onChange={handleAccordionChange(faq.id)}
                            sx={{ mb: 2 }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                sx={{
                                    '&:hover': {
                                        backgroundColor: theme.palette.action.hover,
                                    },
                                }}
                            >
                                <Typography variant="h6">{faq.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography
                                    component="div"
                                    sx={{
                                        whiteSpace: 'pre-line',
                                        color: theme.palette.text.secondary,
                                    }}
                                >
                                    {faq.answer}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))
                ) : (
                    <Paper sx={{ p: 3, textAlign: 'center' }}>
                        <Typography color="text.secondary">
                            No results found for "{searchQuery}". Try different keywords or browse all FAQs.
                        </Typography>
                    </Paper>
                )}
            </Box>

            {/* Contact Section */}
            <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom>
                    Still need help?
                </Typography>
                <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
                    <EmailIcon color="action" />
                    <Link
                        href="mailto:xyz@gmail.com"
                        underline="hover"
                        sx={{ color: theme.palette.primary.main }}
                    >
                        xyz@gmail.com
                    </Link>
                </Box>
                <Typography variant="body2" color="text.secondary" mt={1}>
                    We'll get back to you as soon as possible!
                </Typography>
            </Paper>
        </Container>
    );
};

export default HelpSupportPage;