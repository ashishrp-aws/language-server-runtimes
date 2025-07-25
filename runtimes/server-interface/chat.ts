import {
    NotificationHandler,
    RequestHandler,
    ChatParams,
    ChatResult,
    EndChatParams,
    EndChatResult,
    FeedbackParams,
    FollowUpClickParams,
    InfoLinkClickParams,
    InsertToCursorPositionParams,
    LinkClickParams,
    QuickActionParams,
    QuickActionResult,
    SourceLinkClickParams,
    TabChangeParams,
    TabAddParams,
    TabRemoveParams,
    OpenTabParams,
    OpenTabResult,
    ChatUpdateParams,
    FileClickParams,
    InlineChatParams,
    InlineChatResult,
    ContextCommandParams,
    CreatePromptParams,
    InlineChatResultParams,
    ListConversationsParams,
    ListConversationsResult,
    ConversationClickParams,
    ConversationClickResult,
    GetSerializedChatResult,
    GetSerializedChatParams,
    TabBarActionParams,
    TabBarActionResult,
    ChatOptionsUpdateParams,
    PromptInputOptionChangeParams,
    ButtonClickParams,
    ButtonClickResult,
    ListMcpServersParams,
    ListMcpServersResult,
    McpServerClickResult,
    McpServerClickParams,
    OpenFileDialogParams,
    OpenFileDialogResult,
    RuleClickParams,
    ListRulesParams,
    ListRulesResult,
    RuleClickResult,
    PinnedContextParams,
    ActiveEditorChangedParams,
    ListAvailableModelsParams,
    ListAvailableModelsResult,
    SubscriptionDetailsParams,
    SubscriptionUpgradeParams,
} from '../protocol'

/**
 * The Chat feature interface. Provides access to chat features
 */
export type Chat = {
    // Requests
    onChatPrompt: (handler: RequestHandler<ChatParams, ChatResult | undefined | null, ChatResult>) => void
    onInlineChatPrompt: (
        handler: RequestHandler<InlineChatParams, InlineChatResult | undefined | null, InlineChatResult>
    ) => void
    onEndChat: (handler: RequestHandler<EndChatParams, EndChatResult, void>) => void
    onQuickAction: (handler: RequestHandler<QuickActionParams, QuickActionResult, void>) => void
    openTab: (params: OpenTabParams) => Promise<OpenTabResult>
    onButtonClick: (handler: RequestHandler<ButtonClickParams, ButtonClickResult, ButtonClickResult>) => void
    onListConversations: (handler: RequestHandler<ListConversationsParams, ListConversationsResult, void>) => void
    onListMcpServers: (handler: RequestHandler<ListMcpServersParams, ListMcpServersResult, void>) => void
    onMcpServerClick: (handler: RequestHandler<McpServerClickParams, McpServerClickResult, void>) => void
    onConversationClick: (handler: RequestHandler<ConversationClickParams, ConversationClickResult, void>) => void
    onTabBarAction: (handler: RequestHandler<TabBarActionParams, TabBarActionResult, void>) => void
    getSerializedChat: (params: GetSerializedChatParams) => Promise<GetSerializedChatResult>
    onListRules: (handler: RequestHandler<ListRulesParams, ListRulesResult, void>) => void
    onRuleClick: (handler: RequestHandler<RuleClickParams, RuleClickResult, void>) => void
    onOpenFileDialog: (
        handler: RequestHandler<OpenFileDialogParams, OpenFileDialogResult, OpenFileDialogResult>
    ) => void
    onListAvailableModels: (handler: RequestHandler<ListAvailableModelsParams, ListAvailableModelsResult, void>) => void
    // Notifications
    onSendFeedback: (handler: NotificationHandler<FeedbackParams>) => void
    onReady: (handler: NotificationHandler<void>) => void
    onTabAdd: (handler: NotificationHandler<TabAddParams>) => void
    onTabChange: (handler: NotificationHandler<TabChangeParams>) => void
    onTabRemove: (handler: NotificationHandler<TabRemoveParams>) => void
    onCodeInsertToCursorPosition: (handler: NotificationHandler<InsertToCursorPositionParams>) => void
    onLinkClick: (handler: NotificationHandler<LinkClickParams>) => void
    onInfoLinkClick: (handler: NotificationHandler<InfoLinkClickParams>) => void
    onSourceLinkClick: (handler: NotificationHandler<SourceLinkClickParams>) => void
    onFollowUpClicked: (handler: NotificationHandler<FollowUpClickParams>) => void
    sendChatUpdate: (params: ChatUpdateParams) => void
    onFileClicked: (handler: NotificationHandler<FileClickParams>) => void
    chatOptionsUpdate: (params: ChatOptionsUpdateParams) => void
    sendContextCommands: (params: ContextCommandParams) => void
    sendPinnedContext: (params: PinnedContextParams) => void
    onPinnedContextAdd: (handler: NotificationHandler<PinnedContextParams>) => void
    onPinnedContextRemove: (handler: NotificationHandler<PinnedContextParams>) => void
    onActiveEditorChanged: (handler: NotificationHandler<ActiveEditorChangedParams>) => void
    onCreatePrompt: (handler: NotificationHandler<CreatePromptParams>) => void
    onInlineChatResult: (handler: NotificationHandler<InlineChatResultParams>) => void
    onPromptInputOptionChange: (handler: NotificationHandler<PromptInputOptionChangeParams>) => void
    sendSubscriptionDetails: (params: SubscriptionDetailsParams) => void
    onSubscriptionUpgrade: (handler: NotificationHandler<SubscriptionUpgradeParams>) => void
}
