// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract WaterReport {
    struct Report {
        address reporter;
        string imageUrl;
        string description;
        uint256 timestamp;
        bool verified;
    }

    mapping(uint256 => Report) public reports;
    mapping(address => uint256) public userRewards;
    uint256 public reportCount;

    event ReportSubmitted(address indexed reporter, uint256 reportId, string imageUrl);
    event ReportVerified(uint256 indexed reportId, address indexed verifier);

    function submitReport(string memory _imageUrl, string memory _description) public {
        reportCount++;
        reports[reportCount] = Report(msg.sender, _imageUrl, _description, block.timestamp, false);
        emit ReportSubmitted(msg.sender, reportCount, _imageUrl);
    }

    function verifyReport(uint256 _reportId) public {
        require(_reportId > 0 && _reportId <= reportCount, "Invalid report ID");
        reports[_reportId].verified = true;
        userRewards[reports[_reportId].reporter] += 10; // Reward users with 10 points
        emit ReportVerified(_reportId, msg.sender);
    }

    function getRewardBalance(address _user) public view returns (uint256) {
        return userRewards[_user];
    }
}
