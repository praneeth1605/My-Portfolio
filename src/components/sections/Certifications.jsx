import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from '../common/Section';

const CertificationsContainer = styled.div`
  max-width: 850px;
  margin: 0 auto;
`;

const CertificationsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 32px;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const CertificationCard = styled(motion.div)`
  background: #2c2f38;
  border-radius: 16px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CertificationImage = styled.img`
  max-height: 235px;
  margin: 24px auto 0 auto;
  object-fit: cover;
  display: block;
`;

const CertificationHeader = styled.div`
  padding: 24px 24px 8px 24px;
`;

const CertificationTitle = styled.h4`
  font-weight: 700;
  font-size: 1.2rem;
  color: #fff;
  margin: 0 0 4px 0;
`;

const CertificationIssuer = styled.a`
  font-size: 0.9rem;
  font-weight: 600;
  color: #3399ff;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const CertificationContent = styled.div`
  padding: 0 24px 24px 24px;
  flex-grow: 1;
`;

const CertificationDate = styled.div`
  font-size: 0.9rem;
  color: #bbb;
  margin-bottom: 24px;

  span {
    font-weight: 600;
  }
`;

const CertificationButton = styled.a`
  background-color: #3399ff;
  color: #000;
  font-weight: 700;
  text-align: center;
  display: block;
  padding: 12px 0;
  border-radius: 12px;
  margin: 0 24px 24px 24px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2277dd;
  }
`;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const certificationsData = [
  {
    id: 1,
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'AWS',
    date: '2024',
    link: 'https://www.credly.com/badges/0f72e76a-24f9-4668-8405-b7b95c964fe0/public_url',
    image: '/images/aws.png', // replace with your image URL
  },
  {
    id: 2,
    title: 'Red Hat Certified Enterprise Application Developer',
    issuer: 'Red Hat',
    date: '2024',
    link: 'https://www.credly.com/badges/2ef68f7c-6b4a-4fb0-8fa9-3d803251c5f3/public_url',
    image: '/images/redhat.png',  // replace with your image path or URL
  },
];

const Certifications = () => {
  return (
    <Section id="certifications" title="Certifications">
      <CertificationsContainer>
        <CertificationsGrid
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certificationsData.map((cert) => (
            <CertificationCard
              key={cert.id}
              variants={itemVariants}
            >
              {cert.image && <CertificationImage src={cert.image} alt={`${cert.title} certificate`} />}
              <CertificationHeader>
                <CertificationTitle>{cert.title}</CertificationTitle>
                <CertificationIssuer href="#">{cert.issuer}</CertificationIssuer>
              </CertificationHeader>
              <CertificationContent>
                <CertificationDate>
                  <span>Issued:</span> {cert.date}
                </CertificationDate>
                <CertificationButton href={cert.link} target="_blank" rel="noopener noreferrer">
                  View Credential
                </CertificationButton>
              </CertificationContent>
            </CertificationCard>
          ))}
        </CertificationsGrid>
      </CertificationsContainer>
    </Section>
  );
};

export default Certifications;
