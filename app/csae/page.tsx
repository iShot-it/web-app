"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const PolicySection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        className="flex justify-between items-center w-full p-4 bg-gray-100 hover:bg-gray-200 transition-colors rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-lg font-semibold">{title}</h2>
        {isOpen ? (
          <ChevronUp className="w-5 h-5" />
        ) : (
          <ChevronDown className="w-5 h-5" />
        )}
      </button>
      {isOpen && (
        <div className="mt-2 p-4 bg-white rounded-lg shadow">{children}</div>
      )}
    </div>
  );
};

const CSAEPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Child Sexual Abuse and Exploitation Policy for iShot-It App
      </h1>

      <p className="mb-6">
        iShot-It App Integrated is committed to preventing and addressing child
        sexual abuse and exploitation (CSAE) on its platform. This policy
        outlines the standards, procedures, and actions taken to ensure the
        platform remains a safe, ethical, and secure environment for all users,
        particularly minors.
      </p>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Table of Contents</h2>
        <ol className="list-decimal list-inside">
          <li>Policy Scope</li>
          <li>Zero Tolerance Policy</li>
          <li>Preventive Measures</li>
          <li>Detection and Removal of CSAE Content</li>
          <li>Reporting to Authorities</li>
          <li>User Accountability</li>
          <li>Employee and Moderator Training</li>
          <li>Privacy and Security</li>
          <li>Review and Updates</li>
          <li>Contact and Support</li>
        </ol>
      </div>

      <PolicySection title="1. Policy Scope">
        <p>This policy applies to:</p>
        <ul className="list-disc list-inside">
          <li>All users of iShot-It App.</li>
          <li>All content uploaded, shared, or reported through the app.</li>
          <li>
            All company employees, contractors, and partners involved in content
            moderation or user engagement.
          </li>
        </ul>
      </PolicySection>

      <PolicySection title="2. Zero Tolerance Policy">
        <p>
          iShot-It App has a zero-tolerance approach to any content, activity,
          or behavior that involves CSAE. This includes, but is not limited to:
        </p>
        <ul className="list-disc list-inside">
          <li>
            Sharing, producing, or distributing explicit material involving
            minors.
          </li>
          <li>Facilitating or promoting exploitation of children.</li>
          <li>
            Encouraging or coercing minors to engage in inappropriate or harmful
            activities.
          </li>
        </ul>
      </PolicySection>

      <PolicySection title="3. Preventive Measures">
        <ul className="list-disc list-inside">
          <li>
            <strong>User Verification:</strong> All users must verify their
            accounts, including age verification for minors, to mitigate risks
            of exploitation.
          </li>
          <li>
            <strong>Content Moderation:</strong> Advanced AI tools and human
            moderators will continuously monitor for CSAE-related content.
          </li>
          <li>
            <strong>User Reporting:</strong> A clear and easily accessible
            reporting mechanism will allow users to report CSAE-related content
            or activities.
          </li>
          <li>
            <strong>Education:</strong> The app will include resources and tips
            on child safety for parents, caregivers, and minors.
          </li>
        </ul>
      </PolicySection>

      <PolicySection title="4. Detection and Removal of CSAE Content">
        <ul className="list-disc list-inside">
          <li>
            <strong>Automated Detection:</strong> AI tools will scan for known
            CSAE material using hash-matching technologies.
          </li>
          <li>
            <strong>Manual Review:</strong> Content flagged by AI or users will
            be promptly reviewed by trained moderators.
          </li>
          <li>
            <strong>Immediate Removal:</strong> Any CSAE content will be
            immediately removed, and the accounts involved will be suspended
            pending investigation.
          </li>
        </ul>
      </PolicySection>

      <PolicySection title="5. Reporting to Authorities">
        <p>
          iShot-It App will cooperate with law enforcement agencies and child
          protection organizations to report and combat CSAE:
        </p>
        <ul className="list-disc list-inside">
          <li>
            All CSAE-related incidents will be reported to relevant authorities
            within 24 hours.
          </li>
          <li>
            Evidence of CSAE content will be securely preserved and shared with
            law enforcement when required.
          </li>
        </ul>
      </PolicySection>

      <PolicySection title="6. User Accountability">
        <ul className="list-disc list-inside">
          <li>
            <strong>Terms of Service Agreement:</strong> Users must agree to
            adhere to the platform's policy prohibiting CSAE.
          </li>
          <li>
            <strong>Consequences for Violations:</strong> Accounts found
            violating this policy will face permanent suspension, legal action,
            and reporting to authorities.
          </li>
        </ul>
      </PolicySection>

      <PolicySection title="7. Employee and Moderator Training">
        <ul className="list-disc list-inside">
          <li>
            Employees and moderators will undergo regular training on CSAE
            detection, prevention, and response protocols.
          </li>
          <li>
            Psychological support will be available for staff handling sensitive
            content.
          </li>
        </ul>
      </PolicySection>

      <PolicySection title="8. Privacy and Security">
        <ul className="list-disc list-inside">
          <li>
            User data will be handled with strict confidentiality to protect
            victims and reporters.
          </li>
          <li>Minors' information will be safeguarded to prevent misuse.</li>
        </ul>
      </PolicySection>

      <PolicySection title="9. Review and Updates">
        <p>
          This policy will be reviewed and updated annually or as needed to
          ensure alignment with global standards, laws, and best practices in
          CSAE prevention.
        </p>
      </PolicySection>

      <PolicySection title="10. Contact and Support">
        <p>Users can report CSAE-related concerns or seek support via:</p>
        <ul className="list-disc list-inside">
          <li>Email: support@ishot-itapp.com</li>
          <li>Hotline: [Insert Helpline Number]</li>
          <li>In-App Reporting Tool</li>
        </ul>
      </PolicySection>

      <p className="mt-6 text-sm text-gray-600">
        By enforcing this policy, iShot-It App Integrated reaffirms its
        commitment to creating a safe and credible platform while actively
        contributing to global efforts to combat child sexual abuse and
        exploitation.
      </p>
    </div>
  );
};

export default CSAEPolicy;
